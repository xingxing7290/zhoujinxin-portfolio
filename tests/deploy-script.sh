#!/bin/sh
set -eu

REPOSITORY="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
OLD_IMAGE="ghcr.io/xingxing7290/zhoujinxin-portfolio@sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
NEW_IMAGE="ghcr.io/xingxing7290/zhoujinxin-portfolio@sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
TEMP_ROOT="$(mktemp -d)"
trap 'rm -rf "$TEMP_ROOT"' EXIT HUP INT TERM

make_fake_commands() {
  directory="$1"
  mkdir -p "$directory"
  cat > "$directory/docker" <<'EOF'
#!/bin/sh
set -eu
printf '%s\n' "$*" >> "$FAKE_LOG"

case "$*" in
  *portfolio-backup*)
    destination=""
    for argument in "$@"; do
      case "$argument" in
        BACKUP_DEST=/app/data/*) destination="${argument#BACKUP_DEST=/app/data/}" ;;
      esac
    done
    test -n "$destination"
    mkdir -p "$PORTFOLIO_ROOT/data/$(dirname "$destination")"
    if [ -f "$PORTFOLIO_ROOT/data/portfolio.sqlite" ]; then
      cp "$PORTFOLIO_ROOT/data/portfolio.sqlite" "$PORTFOLIO_ROOT/data/$destination"
    else
      : > "$PORTFOLIO_ROOT/data/$destination"
    fi
    ;;
  *portfolio-migrate*)
    if [ "${FAKE_FAIL_MIGRATE:-0}" = "1" ]; then
      printf '%s' 'corrupted-by-new-migration' > "$PORTFOLIO_ROOT/data/portfolio.sqlite"
      exit 1
    fi
    ;;
esac
EOF
  cat > "$directory/curl" <<'EOF'
#!/bin/sh
exit 0
EOF
  chmod +x "$directory/docker" "$directory/curl"
}

run_success_case() {
  root="$TEMP_ROOT/success"
  fake_bin="$root/fake-bin"
  mkdir -p "$root/data/backups"
  printf '%s\n' 'BASE_URL=https://portfolio.test' 'SECURE_COOKIES=true' > "$root/.env"
  printf '%s' 'stable-database' > "$root/data/portfolio.sqlite"
  : > "$root/fake.log"
  make_fake_commands "$fake_bin"

  PORTFOLIO_ROOT="$root" FAKE_LOG="$root/fake.log" PATH="$fake_bin:$PATH" \
    DEPLOY_SLEEP_SECONDS=0 DEPLOY_HEALTH_ATTEMPTS=1 DEPLOY_PUBLIC_ATTEMPTS=1 \
    PUBLIC_URL=https://portfolio.test sh "$REPOSITORY/scripts/deploy.sh" "$NEW_IMAGE"

  test "$(cat "$root/.current-image")" = "$NEW_IMAGE"
  test "$(grep '^APP_IMAGE=' "$root/.env")" = "APP_IMAGE=$NEW_IMAGE"
  test "$(stat -c '%a' "$root/.env")" = "600"
  grep -q 'compose up -d app caddy cloudflared' "$root/fake.log"
}

run_rollback_case() {
  root="$TEMP_ROOT/rollback"
  fake_bin="$root/fake-bin"
  mkdir -p "$root/data/backups"
  printf '%s\n' "APP_IMAGE=$OLD_IMAGE" 'BASE_URL=https://portfolio.test' > "$root/.env"
  printf '%s\n' "$OLD_IMAGE" > "$root/.current-image"
  printf '%s' 'stable-database' > "$root/data/portfolio.sqlite"
  : > "$root/fake.log"
  make_fake_commands "$fake_bin"

  if PORTFOLIO_ROOT="$root" FAKE_LOG="$root/fake.log" FAKE_FAIL_MIGRATE=1 PATH="$fake_bin:$PATH" \
    DEPLOY_SLEEP_SECONDS=0 DEPLOY_HEALTH_ATTEMPTS=1 DEPLOY_PUBLIC_ATTEMPTS=1 \
    PUBLIC_URL=https://portfolio.test sh "$REPOSITORY/scripts/deploy.sh" "$NEW_IMAGE"; then
    echo "deployment unexpectedly succeeded" >&2
    exit 1
  fi

  test "$(cat "$root/.current-image")" = "$OLD_IMAGE"
  test "$(grep '^APP_IMAGE=' "$root/.env")" = "APP_IMAGE=$OLD_IMAGE"
  test "$(cat "$root/data/portfolio.sqlite")" = 'stable-database'
  grep -q 'compose up -d app caddy cloudflared' "$root/fake.log"
}

run_success_case
run_rollback_case
echo "deploy script success and rollback state tests passed"
