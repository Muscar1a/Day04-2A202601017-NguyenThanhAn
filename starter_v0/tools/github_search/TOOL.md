---
name: github_search
track: bonus
kind: live_api
provider: GitHub REST API
requires_env: [GITHUB_TOKEN]
inputs: [query, sort, limit]
outputs: [items, total]
side_effect: false
---
# github_search

Searches GitHub repositories via the REST API. `GITHUB_TOKEN` is optional
but raises the rate limit from 60 to 5000 requests/hour.
