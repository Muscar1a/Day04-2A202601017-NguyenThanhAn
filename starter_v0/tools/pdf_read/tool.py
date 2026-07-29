from __future__ import annotations

import io
from typing import Any

import requests

from tools._shared import TIMEOUT, err


def read_pdf(url: str = "", max_pages: int = 5, max_chars: int = 8000) -> dict[str, Any]:
    try:
        import pypdf
        response = requests.get(url, timeout=TIMEOUT, headers={"User-Agent": "AI20k-Research-Agent/1.0"})
        response.raise_for_status()
        reader = pypdf.PdfReader(io.BytesIO(response.content))
        pages = reader.pages[:int(max_pages or 5)]
        text = "\n".join(page.extract_text() or "" for page in pages)
        return {
            "tool": "read_pdf",
            "url": url,
            "pages_read": len(pages),
            "total_pages": len(reader.pages),
            "text": text[:int(max_chars or 8000)],
        }
    except Exception as exc:
        return err("read_pdf", exc)
