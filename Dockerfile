# syntax=docker/dockerfile:1.7
FROM node:18.20.4-alpine3.20 AS web
WORKDIR /src
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
COPY tsconfig.json ./
COPY web ./web
RUN npm run build

FROM golang:1.23.12-alpine3.20 AS go
WORKDIR /src
COPY go.mod go.sum ./
RUN --mount=type=cache,target=/go/pkg/mod go mod download
COPY cmd ./cmd
COPY internal ./internal
COPY --from=web /src/internal/site/dist ./internal/site/dist
RUN --mount=type=cache,target=/root/.cache/go-build CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o /out/portfolio ./cmd/server \
  && CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o /out/portfolio-backup ./cmd/backup \
  && CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o /out/portfolio-migrate ./cmd/migrate

FROM alpine:3.20
RUN apk add --no-cache ca-certificates tzdata ffmpeg \
  && addgroup -g 10001 portfolio \
  && adduser -D -H -u 10001 -G portfolio portfolio \
  && install -d -o portfolio -g portfolio -m 0750 /app/data
WORKDIR /app
COPY --from=go /out/portfolio /out/portfolio-backup /out/portfolio-migrate /app/
USER portfolio
EXPOSE 8080
VOLUME ["/app/data"]
HEALTHCHECK --interval=20s --timeout=3s --start-period=15s --retries=3 CMD wget -qO- http://127.0.0.1:8080/api/health >/dev/null || exit 1
ENTRYPOINT ["/app/portfolio"]
