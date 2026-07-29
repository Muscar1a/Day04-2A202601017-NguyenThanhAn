---
name: stackoverflow
track: bonus
kind: live_api
provider: Stack Exchange API v2.3
requires_env: [STACKAPPS_KEY]
inputs: [query, tags, sort, limit]
outputs: [items]
side_effect: false
---
# stackoverflow

Searches Stack Overflow questions via the Stack Exchange API. Supports
filtering by tags and sorting by relevance, votes, creation, or activity.
`STACKAPPS_KEY` is optional but increases daily quota.
