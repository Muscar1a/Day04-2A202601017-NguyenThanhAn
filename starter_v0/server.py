from __future__ import annotations

import sys
from datetime import datetime
from pathlib import Path
from typing import Any

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

ROOT = Path(__file__).parent
sys.path.insert(0, str(ROOT))

from env_loader import load_lab_env
from providers import make_provider
from tools import load_tool_declarations, to_openai_tools
from chat import run_model_tool_loop

load_lab_env(ROOT)

ARTIFACTS_DIR = ROOT / "artifacts"
SYSTEM_PROMPT = (ARTIFACTS_DIR / "system_prompt.md").read_text(encoding="utf-8")
OPENAI_TOOLS = to_openai_tools(load_tool_declarations(ARTIFACTS_DIR / "tools.yaml"))
PROVIDER = make_provider("openrouter")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

_MODE_PREFIX = {
    "fast": "[Mode: fast] ",
    "academic": "[Mode: academic] ",
    "social": "[Mode: social] ",
}


class ResearchRequest(BaseModel):
    query: str
    mode: str = "deep"
    history: list[dict[str, str]] = []


def _extract_sources(tool_events: list[dict[str, Any]]) -> list[dict[str, str]]:
    seen: set[str] = set()
    out: list[dict[str, str]] = []
    for ev in tool_events:
        res = ev.get("result", {})
        if not isinstance(res, dict):
            continue
        for item in res.get("items") or res.get("results") or []:
            if not isinstance(item, dict):
                continue
            url = item.get("url") or ""
            if not url or url in seen:
                continue
            seen.add(url)
            out.append({
                "title": item.get("title") or "",
                "url": url,
                "source": item.get("source") or "",
                "summary": item.get("summary") or item.get("abstract") or "",
            })
    return out[:6]


def _build_steps(rounds: list[dict[str, Any]]) -> list[dict[str, Any]]:
    ts = datetime.now().strftime("%I:%M:%S %p")
    steps = []
    for rd in rounds:
        calls = rd.get("tool_calls", [])
        results = rd.get("tool_results", [])
        thought = rd.get("assistant_text") or ""
        for i, call in enumerate(calls):
            steps.append({
                "round": rd["round"],
                "thought": thought or f"Calling {call['name']}",
                "tool": call["name"],
                "args": call.get("args", {}),
                "result": results[i].get("result", {}) if i < len(results) else {},
                "timestamp": ts,
            })
    return steps


def _extract_clarify(tool_events: list[dict[str, Any]], fallback: str) -> dict | None:
    for ev in tool_events:
        res = ev.get("result", {})
        if isinstance(res, dict) and res.get("awaiting_user"):
            return {
                "question": res.get("question") or fallback,
                "options": res.get("options") or None,
                "response_type": res.get("response_type") or "text",
            }
    return None


@app.post("/api/research")
async def research(req: ResearchRequest):
    prefix = _MODE_PREFIX.get(req.mode, "")
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        *req.history[-10:],
        {"role": "user", "content": f"{prefix}{req.query}"},
    ]

    try:
        result = run_model_tool_loop(
            provider=PROVIDER,
            messages=messages,
            tools=OPENAI_TOOLS,
            model=None,
            max_tool_rounds=4,
        )
    except Exception as exc:
        return {
            "status": "error",
            "assistant_answer": f"Lỗi: {exc}",
            "sources": [], "react_steps": [], "follow_ups": [], "clarify_prompt": None,
        }

    tool_events = result.get("tool_events", [])
    raw_status = result["status"]
    status = "waiting_user" if raw_status == "waiting_for_user" else "completed"

    return {
        "status": status,
        "assistant_answer": result.get("assistant_text") or "",
        "sources": _extract_sources(tool_events),
        "react_steps": _build_steps(result.get("rounds", [])),
        "follow_ups": [],
        "clarify_prompt": _extract_clarify(tool_events, result.get("assistant_text") or "") if status == "waiting_user" else None,
    }
