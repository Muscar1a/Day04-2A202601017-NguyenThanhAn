from __future__ import annotations

import os
from typing import Any

import requests

from tools._shared import TIMEOUT, err


def search_github(query: str = "", sort: str = "best_match", limit: int = 5) -> dict[str, Any]:
    try:
        headers = {"Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28"}
        token = os.getenv("GITHUB_TOKEN")
        if token:
            headers["Authorization"] = f"Bearer {token}"
        sort = sort if sort in {"stars", "forks", "updated", "best_match"} else "best_match"
        params = {"q": query or "AI", "sort": sort, "per_page": min(int(limit or 5), 10)}
        response = requests.get("https://api.github.com/search/repositories", params=params, headers=headers, timeout=TIMEOUT)
        response.raise_for_status()
        data = response.json()
        items = [{
            "title": repo["full_name"],
            "url": repo["html_url"],
            "source": "github.com",
            "summary": repo.get("description") or "",
            "stars": repo.get("stargazers_count"),
            "language": repo.get("language"),
            "updated": repo.get("updated_at"),
        } for repo in data.get("items", [])]
        return {"tool": "search_github", "query": query, "total": data.get("total_count"), "items": items}
    except Exception as exc:
        return err("search_github", exc)
