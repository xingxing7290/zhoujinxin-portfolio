#!/bin/sh
set -eu

if [ "$(id -u)" -ne 0 ]; then
  echo "cleanup must run as root" >&2
  exit 1
fi

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$ROOT_DIR"

if [ ! -s .current-image ]; then
  echo ".current-image is missing" >&2
  exit 1
fi
if [ -z "${ROLLBACK_IMAGE:-}" ]; then
  echo "ROLLBACK_IMAGE must contain the previous immutable image reference" >&2
  exit 1
fi

CURRENT_IMAGE=$(cat .current-image)
CURRENT_ID=$(docker image inspect --format '{{.Id}}' "$CURRENT_IMAGE")
ROLLBACK_ID=$(docker image inspect --format '{{.Id}}' "$ROLLBACK_IMAGE")

# Local aliases make the two deliberately retained images easy to identify.
docker image tag "$CURRENT_ID" zhoujinxin-portfolio:local-current
docker image tag "$ROLLBACK_ID" zhoujinxin-portfolio:local-rollback

echo "[before]"
df -h /
docker system df

echo "[1/5] prune inactive build cache older than 72 hours"
docker builder prune --all --force --filter "until=${BUILD_CACHE_AGE:-72h}"

echo "[2/5] remove old portfolio images while retaining current and rollback"
CANDIDATES=$(
  docker image ls --no-trunc --format '{{.Repository}} {{.ID}}' |
    awk '$1 == "ghcr.io/xingxing7290/zhoujinxin-portfolio" || $1 == "zhoujinxin-portfolio" {print $2}' |
    sort -u
)
for image_id in $CANDIDATES; do
  if [ "$image_id" = "$CURRENT_ID" ] || [ "$image_id" = "$ROLLBACK_ID" ]; then
    continue
  fi
  if docker ps -aq --filter "ancestor=$image_id" | grep -q .; then
    echo "skip container-referenced image: $image_id"
    continue
  fi
  docker image rm --force "$image_id"
done

echo "[3/5] vacuum system journal"
journalctl \
  --vacuum-time="${JOURNAL_RETENTION:-14d}" \
  --vacuum-size="${JOURNAL_MAX_USE:-500M}"

echo "[4/5] remove expired portfolio deployment staging files"
find /tmp -maxdepth 1 -mindepth 1 -mtime +7 \
  \( -name 'zhoujinxin-v*-incoming' -o \
     -name 'zhoujinxin-v*-oci' -o \
     -name 'zhoujinxin-v*-newblobs.tar' \) \
  -exec rm -rf -- {} +

echo "[5/5] clean package download caches"
apt-get clean
if [ "${CLEAN_NPM_CACHE:-0}" = "1" ] && command -v npm >/dev/null 2>&1; then
  npm cache clean --force
  rm -rf -- /root/.npm/_npx
fi

docker image inspect "$CURRENT_ID" "$ROLLBACK_ID" >/dev/null

echo "[after]"
df -h /
docker system df
