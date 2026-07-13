# syntax=docker/dockerfile:1.7
FROM node:18.20.4-alpine3.20@sha256:a25c1e4ecc284985f4cbc449021e9259560c644dd9611e5a72d9c4750f24f6c7 AS web
WORKDIR /src
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
COPY tsconfig.json ./
COPY web ./web
RUN npm run build

FROM golang:1.23.12-alpine@sha256:383395b794dffa5b53012a212365d40c8e37109a626ca30d6151c8348d380b5f AS go
WORKDIR /src
COPY go.mod go.sum ./
RUN --mount=type=cache,target=/go/pkg/mod go mod download
COPY cmd ./cmd
COPY internal ./internal
COPY --from=web /src/internal/site/dist ./internal/site/dist
RUN --mount=type=cache,target=/root/.cache/go-build CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o /out/portfolio ./cmd/server \
  && CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o /out/portfolio-backup ./cmd/backup \
  && CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o /out/portfolio-migrate ./cmd/migrate \
  && CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o /out/portfolio-import-document ./cmd/import-document

FROM alpine:3.20@sha256:d9e853e87e55526f6b2917df91a2115c36dd7c696a35be12163d44e6e2a4b6bc
RUN apk add --no-cache ca-certificates tzdata ffmpeg \
  && addgroup -g 10001 portfolio \
  && adduser -D -H -u 10001 -G portfolio portfolio \
  && install -d -o portfolio -g portfolio -m 0750 /app/data
WORKDIR /app
COPY --from=go /out/portfolio /out/portfolio-backup /out/portfolio-migrate /out/portfolio-import-document /app/
USER portfolio
EXPOSE 8080
VOLUME ["/app/data"]
HEALTHCHECK --interval=20s --timeout=3s --start-period=15s --retries=3 CMD wget -qO- http://127.0.0.1:8080/api/health >/dev/null || exit 1
ENTRYPOINT ["/app/portfolio"]
