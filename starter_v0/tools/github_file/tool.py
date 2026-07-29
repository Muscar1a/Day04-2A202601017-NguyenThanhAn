from __future__ import annotations

import base64
import os
from typing import Any

import requests

from tools._shared import TIMEOUT, err


def read_github_file(repo: str = "", path: str = "", ref: str = "HEAD") -> dict[str, Any]:
    try:
        headers = {"Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28"}
        token = os.getenv("GITHUB_TOKEN")
        if token:
            headers["Authorization"] = f"Bearer {token}"
        url = f"https://api.github.com/repos/{repo}/contents/{path}"
        params = {"ref": ref} if ref and ref != "HEAD" else {}
        response = requests.get(url, params=params, headers=headers, timeout=TIMEOUT)
        response.raise_for_status()
        data = response.json()
        if isinstance(data, list):
            items = [{"name": f["name"], "type": f["type"], "path": f["path"], "url": f.get("html_url")} for f in data]
            return {"tool": "read_github_file", "repo": repo, "path": path, "type": "directory", "items": items}
        content = ""
        if data.get("encoding") == "base64":
            content = base64.b64decode(data["content"]).decode("utf-8", errors="replace")
        return {
            "tool": "read_github_file",
            "repo": repo, "path": path, "type": "file",
            "url": data.get("html_url"),
            "content": content[:8000],
        }
    except Exception as exc:
        return err("read_github_file", exc)
