# 周金鑫 · 嵌入式软件工程师个人网站

中英双语的个人简历与项目案例网站。公开页面以服务端渲染保证内容、SEO 和无障碍基础，桌面端在能力允许时按需加载 Three.js/GSAP“芯片到云端”滚动叙事；独立管理后台负责结构化内容、媒体、简历 PDF、发布快照和版本恢复。

- 正式网站：<https://113-44-50-108.sslip.io/>
- English：<https://113-44-50-108.sslip.io/en>
- 内容后台：<https://113-44-50-108.sslip.io/admin>
- 健康检查：<https://113-44-50-108.sslip.io/api/health>

## 技术结构

- Go 单二进制：公开页面、管理 API、媒体 Range 响应和静态资源全部由同一进程提供。
- SQLite：草稿、不可变发布快照、管理员会话、媒体和文档元数据。
- Vite + TypeScript：公开页渐进增强；React 管理后台；Three.js/GSAP 高性能动效。
- Caddy：HTTPS 自动申请/续期、HTTP 重定向、压缩和反向代理。
- Docker Compose：应用与 Caddy 两个轻量容器，数据和证书独立持久化。
- GitHub Actions：类型检查、单测、E2E、Lighthouse、镜像构建、SBOM 与供应链证明。

## 本地启动

需要 Go 1.23、Node.js 18 和 npm 10。

```bash
npm ci
npm run build
export PORT=8080
export BASE_URL=http://localhost:8080
export DATA_DIR=./data/dev
export ADMIN_USERNAME=admin
export ADMIN_INITIAL_PASSWORD='replace-with-at-least-14-characters'
export SECURE_COOKIES=false
go run ./cmd/server
```

打开 `http://localhost:8080/` 和 `http://localhost:8080/admin`。首次登录必须修改临时密码，修改后全部既有会话自动失效。

## 验证

```bash
go test ./...
go vet ./...
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

## 内容与隐私

公开源码、HTML 和接口中不保存完整手机号；手机号仅存在于管理员上传到持久卷的简历 PDF。原始证件照不在仓库中，仓库只包含身份保持后生成的网页肖像和 AVIF/WebP/JPEG 响应式版本。数据库、上传文件、备份和环境变量均被 Git 忽略。

内容维护见 [docs/CONTENT.md](docs/CONTENT.md)，生产部署和回滚见 [docs/OPERATIONS.md](docs/OPERATIONS.md)，安全说明见 [SECURITY.md](SECURITY.md)。

本仓库默认不附加开源许可证。
