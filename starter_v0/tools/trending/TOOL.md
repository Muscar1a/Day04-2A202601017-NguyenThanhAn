---
name: trending
track: bonus
kind: live_api
provider: RapidAPI (twitter-api45)
requires_env: [RAPIDAPI_KEY, RAPIDAPI_TWITTER_HOST]
inputs: [country]
outputs: [items]
side_effect: false
---
# trending

Fetches trending topics on X/Twitter for a given country via the RapidAPI
twitter-api45 endpoint. Requires `RAPIDAPI_KEY`.
