#!/bin/sh
set -eu

if [ "$(id -u)" -ne 0 ]; then
  echo "EatWhat log maintenance must run as root" >&2
  exit 1
fi

PORTFOLIO_ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
EATWHAT_ROOT=${EATWHAT_ROOT:-/srv/eatwhat}
EATWHAT_ENV=${EATWHAT_ENV:-/etc/eatwhat/eatwhat.env}
EATWHAT_SERVER_CONFIG=${EATWHAT_SERVER_CONFIG:-/etc/eatwhat/docker-compose.server.yml}
LOGGING_SOURCE="$PORTFOLIO_ROOT/deploy/eatwhat/docker-compose.logging.override.yml"
LOGGING_CONFIG=${LOGGING_CONFIG:-/etc/eatwhat/docker-compose.logging.yml}

for required_file in \
  "$EATWHAT_ROOT/docker-compose.yml" \
  "$EATWHAT_ENV" \
  "$EATWHAT_SERVER_CONFIG" \
  "$LOGGING_SOURCE"; do
  if [ ! -f "$required_file" ]; then
    echo "required file is missing: $required_file" >&2
    exit 1
  fi
done

install -D -m 0600 "$LOGGING_SOURCE" "$LOGGING_CONFIG"

compose() {
  docker compose \
    --env-file "$EATWHAT_ENV" \
    -f "$EATWHAT_ROOT/docker-compose.yml" \
    -f "$EATWHAT_SERVER_CONFIG" \
    -f "$LOGGING_CONFIG" \
    "$@"
}

container_name() {
  case "$1" in
    mongodb) printf '%s\n' eatwhat-mongodb ;;
    backend) printf '%s\n' eatwhat-backend ;;
    frontend) printf '%s\n' eatwhat-frontend ;;
    nginx) printf '%s\n' eatwhat-nginx ;;
    *)
      echo "unknown EatWhat service: $1" >&2
      return 1
      ;;
  esac
}

wait_ready() {
  container=$1
  attempts=${EATWHAT_HEALTH_ATTEMPTS:-60}
  interval=${EATWHAT_HEALTH_INTERVAL:-2}
  count=0

  while [ "$count" -lt "$attempts" ]; do
    state=$(docker inspect --format '{{.State.Status}}' "$container" 2>/dev/null || true)
    health=$(docker inspect \
      --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}}' \
      "$container" 2>/dev/null || true)
    if [ "$state" = "running" ] &&
      { [ "$health" = "healthy" ] || [ "$health" = "none" ]; }; then
      return 0
    fi
    count=$((count + 1))
    sleep "$interval"
  done

  echo "$container did not become ready" >&2
  docker ps -a --filter "name=$container" >&2 || true
  docker logs --tail 100 "$container" >&2 || true
  return 1
}

verify_log_limit() {
  container=$1
  driver=$(docker inspect --format '{{.HostConfig.LogConfig.Type}}' "$container")
  max_size=$(docker inspect \
    --format '{{index .HostConfig.LogConfig.Config "max-size"}}' "$container")
  max_file=$(docker inspect \
    --format '{{index .HostConfig.LogConfig.Config "max-file"}}' "$container")

  if [ "$driver" != "json-file" ] ||
    [ "$max_size" != "10m" ] ||
    [ "$max_file" != "3" ]; then
    echo "$container logging configuration is not the expected 10m x 3" >&2
    return 1
  fi
}

compose config >/dev/null

mongo_data_before=$(docker inspect \
  --format '{{range .Mounts}}{{if eq .Destination "/data/db"}}{{.Source}}{{end}}{{end}}' \
  eatwhat-mongodb)
if [ -z "$mongo_data_before" ]; then
  echo "existing MongoDB data volume was not found" >&2
  exit 1
fi

for service in mongodb backend frontend nginx; do
  container=$(container_name "$service")
  echo "recreating $container with bounded logs"
  compose up -d --no-deps --force-recreate "$service"
  wait_ready "$container"
  verify_log_limit "$container"

  if [ "$service" = "mongodb" ]; then
    mongo_data_after=$(docker inspect \
      --format '{{range .Mounts}}{{if eq .Destination "/data/db"}}{{.Source}}{{end}}{{end}}' \
      eatwhat-mongodb)
    if [ "$mongo_data_before" != "$mongo_data_after" ]; then
      echo "MongoDB data volume changed during recreation" >&2
      exit 1
    fi
  fi
done

echo "EatWhat logging limits are active; MongoDB data volume is unchanged"
