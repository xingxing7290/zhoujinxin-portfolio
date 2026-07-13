#!/bin/sh
set -eu

ROOT="/srv/zhoujinxin-portfolio"
CERTBOT="${CERTBOT_BIN:-/opt/certbot-ip/bin/certbot}"

case "${1:-}" in
  "") set -- ;;
  --dry-run) set -- --dry-run ;;
  *)
    echo "usage: $0 [--dry-run]" >&2
    exit 2
    ;;
esac

cd "$ROOT"
exec "$CERTBOT" renew \
  --cert-name 113.44.50.108 \
  --quiet \
  --no-random-sleep-on-renew \
  "$@" \
  --pre-hook "docker compose --project-directory $ROOT -f $ROOT/docker-compose.yml stop caddy" \
  --post-hook "docker compose --project-directory $ROOT -f $ROOT/docker-compose.yml up -d caddy"
