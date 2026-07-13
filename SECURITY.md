# Security

请不要在公开 Issue 中披露漏洞、管理员凭据、个人手机号或未公开简历文件。安全问题请发送到 `zhoujx158@163.com`，包含影响范围、复现条件和建议修复方式。

管理员密码使用 Argon2id；会话 Cookie 使用 `Secure`、`HttpOnly`、`SameSite=Strict`，8 小时过期。所有管理写请求要求同源 Origin 和 CSRF Token，登录接口按来源 IP 限流。上传采用流式写盘、文件魔数校验、随机文件名、路径隔离和配额限制。

仓库不会接收 `.env`、SQLite、上传媒体、备份、原始证件照或包含手机号的简历 PDF。
