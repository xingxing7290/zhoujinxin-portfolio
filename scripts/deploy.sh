#!/bin/sh
set -eu

ROOT="/srv/zhoujinxin-portfolio"
PUBLIC_URL="https://113.44.50.108"
NEW_IMAGE="${1:-}"

if [ -z "$NEW_IMAGE" ] || ! printf '%s' "$NEW_IMAGE" | grep -Eq '^ghcr\.io/xingxing7290/zhoujinxin-portfolio@sha256:[a-f0-9]{64}$'; then
  echo "usage: $0 ghcr.io/xingxing7290/zhoujinxin-portfolio@sha256:<64 hex>" >&2
  exit 2
fi

cd "$ROOT"
mkdir -p data/backups
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
  APP_IMAGE="$CURRENT_IMAGE" docker compose up -d app caddy || true
  exit 1
}
trap rollback HUP INT TERM

echo "[2/6] pulling immutable image"
APP_IMAGE="$NEW_IMAGE" docker compose pull app || rollback

echo "[3/6] running forward migration"
APP_IMAGE="$NEW_IMAGE" docker compose run --rm --no-deps --entrypoint /app/portfolio-migrate app || rollback

echo "[4/6] starting application and Caddy"
APP_IMAGE="$NEW_IMAGE" docker compose up -d app caddy || rollback

echo "[5/6] checking container health"
attempt=0
until APP_IMAGE="$NEW_IMAGE" docker compose exec -T app wget -qO- http://127.0.0.1:8080/api/health >/dev/null 2>&1; do
  attempt=$((attempt + 1))
  if [ "$attempt" -ge 30 ]; then
    rollback
  fi
  sleep 2
done

echo "[6/6] checking public HTTPS"
attempt=0
until curl --fail --silent --show-error "$PUBLIC_URL/api/health" >/dev/null; do
  attempt=$((attempt + 1))
  if [ "$attempt" -ge 45 ]; then
    rollback
  fi
  sleep 2
done

printf '%s\n' "$NEW_IMAGE" > .current-image
trap - HUP INT TERM
echo "deployment complete: $PUBLIC_URL/"
