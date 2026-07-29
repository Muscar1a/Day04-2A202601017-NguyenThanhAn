---
name: semantic_scholar
track: bonus
kind: live_api
provider: Semantic Scholar Graph API
requires_env: [S2_API_KEY]
inputs: [query, max_results]
outputs: [items, total]
side_effect: false
---
# semantic_scholar

Searches academic papers across all fields via Semantic Scholar. Returns
title, authors, year, abstract snippet, and citation count. `S2_API_KEY`
is optional but increases rate limits.
