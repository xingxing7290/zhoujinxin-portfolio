#!/bin/sh
set -eu

ROOT="${PORTFOLIO_ROOT:-/srv/zhoujinxin-portfolio}"
PUBLIC_URL="${PUBLIC_URL:-https://xstar.cc.cd}"
HEALTH_ATTEMPTS="${DEPLOY_HEALTH_ATTEMPTS:-30}"
PUBLIC_ATTEMPTS="${DEPLOY_PUBLIC_ATTEMPTS:-45}"
SLEEP_SECONDS="${DEPLOY_SLEEP_SECONDS:-2}"
NEW_IMAGE="${1:-}"

if [ -z "$NEW_IMAGE" ] || ! printf '%s' "$NEW_IMAGE" | grep -Eq '^ghcr\.io/xingxing7290/zhoujinxin-portfolio@sha256:[a-f0-9]{64}$'; then
  echo "usage: $0 ghcr.io/xingxing7290/zhoujinxin-portfolio@sha256:<64 hex>" >&2
  exit 2
fi

cd "$ROOT"
mkdir -p data/backups

persist_image() {
  image="$1"
  env_file="$ROOT/.env"
  env_temp="$ROOT/.env.deploy.$$"
  if [ ! -f "$env_file" ]; then
    echo "missing deployment environment: $env_file" >&2
    return 1
  fi
  umask 077
  awk -v image="$image" '
    BEGIN { replaced = 0 }
    /^APP_IMAGE=/ {
      if (!replaced) {
        print "APP_IMAGE=" image
        replaced = 1
      }
      next
    }
    { print }
    END {
      if (!replaced) {
        print "APP_IMAGE=" image
      }
    }
  ' "$env_file" > "$env_temp" || {
    rm -f "$env_temp"
    return 1
  }
  chmod 600 "$env_temp"
  mv -f "$env_temp" "$env_file"
}

CURRENT_IMAGE=""
if [ -f .current-image ]; then
  CURRENT_IMAGE="$(cat .current-image)"
fi
if [ -z "$CURRENT_IMAGE" ]; then
  CURRENT_IMAGE="$NEW_IMAGE"
fi

timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
backup="/app/data/backups/portfolio-$timestamp.sqlite"

echo "[1/6] backing up SQLite"
APP_IMAGE="$CURRENT_IMAGE" docker compose run --rm --no-deps --entrypoint /app/portfolio-backup -e "BACKUP_DEST=$backup" app

rollback() {
  echo "deployment failed; restoring previous image and database" >&2
  APP_IMAGE="$NEW_IMAGE" docker compose stop app || true
  cp "data/backups/portfolio-$timestamp.sqlite" data/portfolio.sqlite
  rm -f data/portfolio.sqlite-wal data/portfolio.sqlite-shm
  persist_image "$CURRENT_IMAGE" || true
  APP_IMAGE="$CURRENT_IMAGE" docker compose up -d app caddy cloudflared || true
  exit 1
}
trap rollback HUP INT TERM

echo "[2/6] pulling immutable image"
APP_IMAGE="$NEW_IMAGE" docker compose pull app || rollback

echo "[3/6] running forward migration"
APP_IMAGE="$NEW_IMAGE" docker compose run --rm --no-deps --entrypoint /app/portfolio-migrate app || rollback

echo "[4/6] starting application, Caddy, and Cloudflare Tunnel"
APP_IMAGE="$NEW_IMAGE" docker compose up -d app caddy cloudflared || rollback

echo "[5/6] checking container health"
attempt=0
until APP_IMAGE="$NEW_IMAGE" docker compose exec -T app wget -qO- http://127.0.0.1:8080/api/health >/dev/null 2>&1; do
  attempt=$((attempt + 1))
  if [ "$attempt" -ge "$HEALTH_ATTEMPTS" ]; then
    rollback
  fi
  sleep "$SLEEP_SECONDS"
done

echo "[6/6] checking public HTTPS"
attempt=0
until curl --fail --silent --show-error "$PUBLIC_URL/api/health" >/dev/null; do
  attempt=$((attempt + 1))
  if [ "$attempt" -ge "$PUBLIC_ATTEMPTS" ]; then
    rollback
  fi
  sleep "$SLEEP_SECONDS"
done

persist_image "$NEW_IMAGE" || rollback
state_temp="$ROOT/.current-image.deploy.$$"
printf '%s\n' "$NEW_IMAGE" > "$state_temp" || rollback
mv -f "$state_temp" .current-image || rollback
trap - HUP INT TERM
echo "deployment complete: $PUBLIC_URL/"
