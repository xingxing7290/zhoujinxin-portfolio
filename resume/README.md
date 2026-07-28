# 三版简历维护说明

本目录保存不含手机号的公开内容源，分别用于不同岗位：

- `周金鑫-嵌入式软件工程师.md`：嵌入式 Linux、4G 网关、设备通信与边缘终端岗位。
- `周金鑫-物联网全栈工程师.md`：物联网全栈、设备云平台、设备接入与端—边—云岗位。
- `周金鑫-AI原生全栈工程师.md`：AI 应用开发、AI 协作全栈、Vibe Coding、RAG 与物联网交叉岗位。

这三份文件共同构成正式简历 V1。个人网站采用“物联网全栈工程师”作为综合定位，线上 `/resume.pdf` 默认使用物联网全栈版；另外两版作为定向投递版本保留。

## 生成可编辑文件

生成器不会在源码中保存手机号，必须在运行时通过环境变量注入：

```powershell
python -m pip install -r requirements-resume.txt
$env:RESUME_PHONE='<私人手机号>'
python scripts/generate-resume-docx.py
npm run resume:targeted-pdf
Remove-Item Env:RESUME_PHONE
```

DOCX 与 PDF 默认输出到被 Git 忽略的 `data/generated/resumes/`。DOCX 可直接在 Word
或其他兼容编辑器中修改；PDF 由 Chromium 无界面生成，本项目的自动生成与检查流程不调用 WPS。

正式投递版页眉只保留所在地、手机号和邮箱，不展示个人网站或 GitHub。教育经历统一放在
工作经历和代表项目之后；大学论文、竞赛与奖项只作为专业能力佐证压缩保留。

## 内容维护原则

- 三版共用同一组可验证经历，但根据岗位调整技能顺序、项目顺序和篇幅。
- 不在公开 Markdown、脚本、Git 历史或网页 HTML 中写入完整手机号。
- AI 版区分“使用 AI 完成软件交付”和“将大模型能力接入产品”，不把 AI 辅助编码包装成已经完成的 Agent 平台。
- 未实际完成的 MCP、Function Calling、多 Agent 编排、模型训练或微调能力不写入简历。
