from __future__ import annotations

import os
from typing import Any

import requests

from tools._shared import TIMEOUT, err

_FIELDS = "title,authors,year,abstract,url,citationCount"


def search_semantic_scholar(query: str = "", max_results: int = 5) -> dict[str, Any]:
    try:
        headers = {}
        key = os.getenv("S2_API_KEY")
        if key:
            headers["x-api-key"] = key
        params = {"query": query, "limit": min(int(max_results or 5), 10), "fields": _FIELDS}
        response = requests.get(
            "https://api.semanticscholar.org/graph/v1/paper/search",
            params=params, headers=headers, timeout=TIMEOUT,
        )
        response.raise_for_status()
        data = response.json()
        items = [{
            "title": p.get("title"),
            "url": p.get("url") or f"https://www.semanticscholar.org/paper/{p.get('paperId')}",
            "source": "semanticscholar.org",
            "summary": (p.get("abstract") or "")[:400],
            "authors": [a.get("name") for a in (p.get("authors") or [])],
            "year": p.get("year"),
            "citations": p.get("citationCount"),
        } for p in data.get("data", [])]
        return {"tool": "search_semantic_scholar", "query": query, "total": data.get("total"), "items": items}
    except Exception as exc:
        return err("search_semantic_scholar", exc)
