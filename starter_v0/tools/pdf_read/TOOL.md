---
name: pdf_read
track: bonus
kind: live_api
provider: (no external API — downloads PDF directly)
requires_env: []
inputs: [url, max_pages, max_chars]
outputs: [text, pages_read, total_pages]
side_effect: false
---
# pdf_read

Downloads a PDF from a URL and extracts text using `pypdf`. Requires
`pypdf` in the project dependencies. Useful for reading arXiv papers,
technical reports, or any publicly accessible PDF.
