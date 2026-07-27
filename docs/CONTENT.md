# 内容维护说明

## 日常发布流程

1. 进入 `/admin`，使用独立管理员账号登录。
2. 在“首页与定位、项目案例、工作经历、能力矩阵、教育荣誉”中编辑结构化内容。
3. 中文和 English 并排维护；Markdown 工具栏用于项目背景、方案和成果的列表排版。
4. “实时预览”会直接呈现尚未保存的中英文改动；保存草稿后再打开新窗口预览，检查完整公开版式。两种预览都不影响公开站点。
5. 在媒体库上传图片、视频或替换简历 PDF。JPEG/PNG 会在浏览器内缩放并转为 WebP，再以流式请求上传。
6. 项目通过媒体 ID 关联素材；拖拽左侧项目列表可改变排序。
7. 填写发布说明并确认发布。系统先保存草稿，再生成不可变快照，最后原子切换公开版本。

## 项目内容标准

每个项目固定维护：中英标题和简介、角色、周期、背景、职责与关键方案、验证成果、技术栈、媒体、精选状态、顺序、`draft/published` 状态和稳定 slug。

成果只使用可验证事实，不补造人数、性能、营收或百分比。工作经历描述职责边界和持续贡献；项目案例描述具体背景、行动和结果，避免两处重复。

## 版本与恢复

“历史版本”显示每次发布形成的不可变快照。恢复会把指定快照复制到草稿；线上内容保持不变，直到管理员重新检查并发布。

已经被任何发布快照引用的媒体不能直接删除。要清理它，先从项目中解除引用并发布新版本；历史快照仍引用的素材应继续保留，以保证历史可恢复。

## 从仓库发布结构化内容

版本发布时可将 `internal/seed/content.json` 原子发布为新的不可变快照。该命令先校验双语字段和项目结构，再更新草稿并发布；公开页面始终只读取当前发布版本：

```bash
APP_IMAGE="$(cat .current-image)" docker compose run --rm --no-deps \
  --entrypoint /app/portfolio-publish-seed app '简历内容与项目详情 V2'
```

执行前应先运行 `portfolio-backup`，执行后检查中英文首页、精选项目与归档项目详情。

## 维护三份正式简历

`resume/` 维护嵌入式、物联网全栈和 AI 原生全栈三份不含手机号的公开 Markdown 内容源。`internal/seed/content.json` 使用物联网全栈定位作为网站综合版本；更新事实时应同步检查三份简历和网站结构化内容，岗位关键词与项目排序可以不同。

以下命令生成三份可编辑 DOCX，文件默认进入被 Git 忽略的 `data/generated/resumes/`：

```powershell
python -m pip install -r requirements-resume.txt
$env:RESUME_PHONE='<私人手机号>'
python scripts/generate-resume-docx.py
Remove-Item Env:RESUME_PHONE
```

手机号是必填的运行时变量，生成器不会打印它，也不会把它写入源码。使用 Microsoft Word 导出两页 A4 PDF；自动生成与检查流程不调用 WPS。网站 `/resume.pdf` 默认发布物联网全栈版，另外两版用于定向投递。确认页数、文字和版式后，通过后台“简历 PDF”上传，或按 `docs/OPERATIONS.md` 的私有导入流程替换线上文件。

如需从网站结构化内容生成浏览器可编辑的 HTML/PDF 快照，可运行：

```powershell
$env:RESUME_PHONE='<私人手机号>'
$env:RESUME_WEBSITE='https://xstar.cc.cd'
npm run resume:snapshot-pdf
```

## 上传限制

- JPEG、PNG、WebP、AVIF：单文件 15MB。
- PDF：单文件 25MB。
- MP4、WebM、H.264 MOV：单文件 150MB；MOV 会先验证视频轨确为 H.264。
- 媒体库总配额：2GB。

服务端使用魔数而不是扩展名判断格式，随机化存储文件名并隔离路径。MOV 先由 ffprobe 验证编码，再通过 ffmpeg 低内存、无重编码封装为 MP4，并在封装后重新检查总配额；不执行高负载视频转码。
