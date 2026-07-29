from __future__ import annotations

import os
from typing import Any

import requests

from tools._shared import TIMEOUT, err


def search_reddit(query: str = "", subreddit: str = "", sort: str = "relevance", limit: int = 5) -> dict[str, Any]:
    try:
        ua = os.getenv("ARXIV_USER_AGENT", "AI20k-Day04-Research-Agent/1.0 (educational lab)")
        base = f"https://www.reddit.com/r/{subreddit}/search.json" if subreddit else "https://www.reddit.com/search.json"
        params: dict[str, Any] = {"q": query, "sort": sort, "limit": int(limit or 5), "restrict_sr": bool(subreddit)}
        response = requests.get(base, params=params, headers={"User-Agent": ua}, timeout=TIMEOUT)
        response.raise_for_status()
        posts = response.json()["data"]["children"]
        items = [{
            "title": p["data"]["title"],
            "url": f"https://reddit.com{p['data']['permalink']}",
            "source": f"r/{p['data']['subreddit']}",
            "summary": (p["data"].get("selftext") or p["data"].get("url", ""))[:400],
            "score": p["data"].get("score"),
        } for p in posts]
        return {"tool": "search_reddit", "query": query, "subreddit": subreddit, "sort": sort, "items": items}
    except Exception as exc:
        return err("search_reddit", exc)
