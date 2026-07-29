from __future__ import annotations

import os
from typing import Any

import requests

from tools._shared import TIMEOUT, err


def search_stackoverflow(query: str = "", tags: str = "", sort: str = "relevance", limit: int = 5) -> dict[str, Any]:
    try:
        params: dict[str, Any] = {
            "order": "desc",
            "sort": sort if sort in {"relevance", "votes", "creation", "activity"} else "relevance",
            "q": query,
            "site": "stackoverflow",
            "pagesize": min(int(limit or 5), 10),
            "filter": "withbody",
        }
        if tags:
            params["tagged"] = tags
        key = os.getenv("STACKAPPS_KEY")
        if key:
            params["key"] = key
        response = requests.get(
            "https://api.stackexchange.com/2.3/search/advanced",
            params=params, timeout=TIMEOUT,
        )
        response.raise_for_status()
        data = response.json()
        items = [{
            "title": q.get("title"),
            "url": q.get("link"),
            "source": "stackoverflow.com",
            "summary": (q.get("body") or "")[:400],
            "score": q.get("score"),
            "answers": q.get("answer_count"),
            "tags": q.get("tags"),
        } for q in data.get("items", [])]
        return {"tool": "search_stackoverflow", "query": query, "tags": tags, "items": items}
    except Exception as exc:
        return err("search_stackoverflow", exc)
