# 生产部署与回滚

## 目录和服务

- 服务器：`113.44.50.108`
- 工作目录：`/srv/zhoujinxin-portfolio`
- 正式地址：`https://xstar.cc.cd/`
- 备用 IP 地址：`https://113.44.50.108/`
- 容器：`app`、`caddy`、`cloudflared`
- 持久数据：`./data`、`./data/cloudflared`、`caddy_data`、`caddy_config`、`/etc/letsencrypt`

服务器不构建源码，只匿名拉取 GitHub Actions 发布到 GHCR 的 `linux/amd64` 镜像。应用镜像必须以 `@sha256:...` 摘要传给部署脚本。

## 首次部署

```bash
sudo mkdir -p /srv/zhoujinxin-portfolio
sudo chown "$USER":"$USER" /srv/zhoujinxin-portfolio
cd /srv/zhoujinxin-portfolio
git clone https://github.com/xingxing7290/zhoujinxin-portfolio.git .
sudo sh scripts/bootstrap-server.sh
cp .env.example .env
chmod 600 .env
```

在 `.env` 设置 `BASE_URL=https://xstar.cc.cd`、随机生成且至少 14 字符的 `ADMIN_INITIAL_PASSWORD` 和 `SECURE_COOKIES=true`。不要把 `.env` 回传仓库。

当前机房的域名合规网关会在 Caddy 之前拦截入站域名 Host/SNI，因此正式域名使用 Cloudflare Tunnel 的出站连接；公网 IP 仍使用 Let’s Encrypt 的六天证书作为运维备用入口。Caddy 的 `default_sni` 负责为不发送 SNI 的 IP 客户端选择该证书。首次部署需安装 Certbot 5.3 或更高版本并签发 IP 证书：

```bash
sudo /opt/certbot-ip/bin/certbot certonly --standalone \
  --preferred-profile shortlived \
  --ip-address 113.44.50.108 \
  --non-interactive --agree-tos \
  --email zhoujx158@163.com --no-eff-email
sudo cp deploy/systemd/zhoujinxin-portfolio-cert-renew.* /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now zhoujinxin-portfolio-cert-renew.timer
```

续期任务每天检查两次。只有证书进入续期窗口时才短暂停止 Caddy 完成 standalone 校验，应用容器和其他业务容器保持运行。

随后使用仓库固定的 Cloudflared 镜像完成一次账户授权并创建本地管理隧道。`data/cloudflared/`、`cert.pem` 和隧道凭据 JSON 都不得提交 Git：

```bash
mkdir -p data/cloudflared
chown 65532:65532 data/cloudflared
chmod 700 data/cloudflared
CLOUDFLARED='cloudflare/cloudflared@sha256:188bb03589a32affed3cf4d0590565ffe67b78866e6b5582574afab2b705bafe'
docker run --rm -v "$PWD/data/cloudflared:/home/nonroot/.cloudflared" \
  "$CLOUDFLARED" tunnel login
docker run --rm -v "$PWD/data/cloudflared:/home/nonroot/.cloudflared" \
  "$CLOUDFLARED" tunnel create zhoujinxin-portfolio
docker run --rm -v "$PWD/data/cloudflared:/home/nonroot/.cloudflared" \
  "$CLOUDFLARED" tunnel route dns --overwrite-dns zhoujinxin-portfolio xstar.cc.cd
```

在 `data/cloudflared/config.yml` 写入创建命令返回的 UUID，随后执行 `chown -R 65532:65532 data/cloudflared && chmod 600 data/cloudflared/*`：

```yaml
tunnel: <tunnel-uuid>
credentials-file: /etc/cloudflared/<tunnel-uuid>.json
protocol: http2
metrics: 0.0.0.0:2000
ingress:
  - hostname: xstar.cc.cd
    service: http://caddy:8081
  - service: http_status:404
```

隧道创建和 DNS 路由完成后删除账户级 `data/cloudflared/cert.pem`，运行隧道只保留该隧道的凭据 JSON。Cloudflared 服务使用只读文件系统、删除全部 Linux capabilities，并且不暴露宿主机端口。

```bash
sh scripts/deploy.sh ghcr.io/xingxing7290/zhoujinxin-portfolio@sha256:<digest>
```

部署固定执行：SQLite 在线一致性备份、拉取摘要镜像、向前迁移、启动、容器健康检查、公开 HTTPS 检查。成功后会原子更新 `.current-image`，并同步 `.env` 中的 `APP_IMAGE`，防止后续普通 `docker compose up` 意外回退；任一步失败都会停止新应用，恢复上一镜像、镜像状态和数据库备份。

含手机号的首份简历只通过 SSH 放进持久卷，然后用镜像内的受限导入命令登记；文件不经过 Git 或镜像层：

```bash
install -d -o 10001 -g 10001 -m 0750 data/inbox
# 将私有 PDF 上传为 data/inbox/resume.pdf 后：
APP_IMAGE="$(cat .current-image)" docker compose run --rm --no-deps \
  --entrypoint /app/portfolio-import-document app /app/data/inbox/resume.pdf
rm -f data/inbox/resume.pdf
```

## 验收

```bash
curl -I http://xstar.cc.cd/
curl --fail https://xstar.cc.cd/api/health
curl -I https://xstar.cc.cd/resume.pdf
curl --fail https://113.44.50.108/api/health
docker compose ps
docker stats --no-stream
```

同时检查 EatWhat 与 AI 简历服务既有端口，确认 `3000–3003/8088/8089` 仍在监听且页面可用。

## 备份与日志

每次部署在 `data/backups/` 创建 SQLite 备份。额外手工备份可运行：

```bash
APP_IMAGE="$(cat .current-image)" docker compose run --rm --no-deps \
  --entrypoint /app/portfolio-backup app
```

容器日志限制为单文件 10MB、最多 3 个文件：

```bash
docker compose logs --tail=200 app caddy cloudflared
```

定期把 `data/` 和 Caddy 卷备份到服务器之外。管理员遗忘密码时，不应直接编辑哈希；应走离线、审计化的账号恢复流程后重启服务。
