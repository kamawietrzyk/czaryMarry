#!/usr/bin/env bash
yarn install
yarn build
cd build && aws s3 sync --acl public-read --delete . s3://new.czarymarry.com
# curl -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" -H "X-Auth-Email: $CLOUDFLARE_EMAIL" -H "X-Auth-Key: $CLOUDFLARE_API_KEY" -H "Content-Type: application/json" --data '{"purge_everything":true}'