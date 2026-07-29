---
name: github_file
track: bonus
kind: live_api
provider: GitHub REST API
requires_env: [GITHUB_TOKEN]
inputs: [repo, path, ref]
outputs: [content | items, type, url]
side_effect: false
---
# github_file

Reads a file or lists a directory in a GitHub repository via the REST API.
Returns decoded text content for files (up to 8000 chars) or a file listing
for directories. `GITHUB_TOKEN` is optional but raises rate limits.
