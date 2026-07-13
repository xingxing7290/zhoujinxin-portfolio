#!/bin/sh
set -eu

ROOT="/srv/zhoujinxin-portfolio"
install -d -m 0750 "$ROOT" "$ROOT/data" "$ROOT/data/backups"
chown -R 10001:10001 "$ROOT/data"
echo "server directories ready under $ROOT"
