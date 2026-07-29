---
name: reddit_search
track: bonus
kind: live_api
provider: Reddit public JSON API
requires_env: [ARXIV_USER_AGENT]
inputs: [query, subreddit, sort, limit]
outputs: [items]
side_effect: false
---
# reddit_search

Searches Reddit via the public JSON API (no OAuth required). Supports
filtering by subreddit and sorting by relevance, hot, new, or top.
