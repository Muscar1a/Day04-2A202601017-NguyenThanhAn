from __future__ import annotations

import os
from typing import Any

import requests

from tools._shared import TIMEOUT, err


def get_trending(country: str = "vietnam") -> dict[str, Any]:
    try:
        key = os.getenv("RAPIDAPI_KEY")
        host = os.getenv("RAPIDAPI_TWITTER_HOST", "twitter-api45.p.rapidapi.com")
        if not key:
            raise RuntimeError("Missing RAPIDAPI_KEY env var")
        response = requests.get(
            f"https://{host}/trending.php",
            params={"country": country},
            headers={"x-rapidapi-key": key, "x-rapidapi-host": host},
            timeout=TIMEOUT,
        )
        response.raise_for_status()
        data = response.json()
        trends = data.get("trends") or []
        items = [{"title": t.get("name"), "url": t.get("url"), "tweet_volume": t.get("tweet_volume")} for t in trends]
        return {"tool": "get_trending", "country": country, "items": items}
    except Exception as exc:
        return err("get_trending", exc)
