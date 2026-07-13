# 生产部署与回滚

## 目录和服务

- 服务器：`113.44.50.108`
- 工作目录：`/srv/zhoujinxin-portfolio`
- 正式域名：`113-44-50-108.sslip.io`
- 容器：`app`、`caddy`
- 持久数据：`./data`、`caddy_data`、`caddy_config`

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

在 `.env` 设置正式 `BASE_URL`、随机生成且至少 14 字符的 `ADMIN_INITIAL_PASSWORD`、`SECURE_COOKIES=true` 和证书邮箱。不要把 `.env` 回传仓库。

```bash
sh scripts/deploy.sh ghcr.io/xingxing7290/zhoujinxin-portfolio@sha256:<digest>
```

部署固定执行：SQLite 在线一致性备份、拉取摘要镜像、向前迁移、启动、容器健康检查、公开 HTTPS 检查。任一步失败都会停止新应用，恢复上一镜像和数据库备份。

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
curl -I http://113.44.50.108/
curl --fail https://113-44-50-108.sslip.io/api/health
curl -I https://113-44-50-108.sslip.io/resume.pdf
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
docker compose logs --tail=200 app caddy
```

定期把 `data/` 和 Caddy 卷备份到服务器之外。管理员遗忘密码时，不应直接编辑哈希；应走离线、审计化的账号恢复流程后重启服务。
