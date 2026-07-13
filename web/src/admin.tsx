import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Localized = { zh: string; en: string };
type Profile = { name: Localized; title: Localized; eyebrow: Localized; summary: Localized; availability: Localized; email: string; location: Localized; portraitUrl: string };
type HeroStep = { index: number; kicker: Localized; title: Localized; body: Localized };
type SkillGroup = { id: string; title: Localized; items: string[]; order: number };
type Experience = { id: string; company: Localized; role: Localized; period: Localized; summary: Localized; bullets: Localized; order: number };
type Project = { id: string; slug: string; title: Localized; summary: Localized; role: Localized; period: Localized; background: Localized; actions: Localized; results: Localized; stack: string[]; mediaIds: string[]; featured: boolean; visible: boolean; status: "draft" | "published"; order: number };
type Education = { id: string; school: Localized; degree: Localized; period: Localized; details: Localized; order: number };
type Award = { id: string; title: Localized; period: string; order: number };
type Content = { profile: Profile; hero: HeroStep[]; skills: SkillGroup[]; experiences: Experience[]; projects: Project[]; education: Education[]; awards: Award[]; updatedAt: string };
type Session = { username: string; csrfToken: string; expiresAt: string; mustChangePassword: boolean };
type Revision = { id: string; note: string; createdAt: string; active: boolean };
type Media = { id: string; kind: "image" | "video"; originalName: string; mimeType: string; size: number; status: string; createdAt: string };
type Tab = "profile" | "projects" | "experience" | "skills" | "credentials" | "media" | "history";

let csrfToken = "";

async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  if (options.body && !(options.body instanceof FormData)) headers.set("Content-Type", "application/json");
  if (csrfToken && options.method && options.method !== "GET") headers.set("X-CSRF-Token", csrfToken);
  const response = await fetch(path, { ...options, headers, credentials: "same-origin" });
  if (!response.ok) {
    const body = await response.json().catch(() => ({ error: `请求失败 (${response.status})` }));
    throw new Error(body.error || `请求失败 (${response.status})`);
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

function emptyLocalized(): Localized { return { zh: "", en: "" }; }
function uniqueId(prefix: string) { return `${prefix}_${crypto.randomUUID().replaceAll("-", "").slice(0, 12)}`; }
function clone<T>(value: T): T { return structuredClone(value); }

function Login({ onSuccess }: { onSuccess: (session: Session) => void }) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      const session = await api<Session>("/api/admin/session", { method: "POST", body: JSON.stringify({ username, password }) });
      csrfToken = session.csrfToken; onSuccess(session);
    } catch (reason) { setError((reason as Error).message); } finally { setBusy(false); }
  }
  return <div className="login-shell">
    <section className="login-brand"><p>JX / CONTENT OPERATIONS</p><h1>让每次交付，<br />都有清晰证据。</h1><small>双语内容 · 项目媒体 · 原子发布 · 历史恢复</small></section>
    <section className="login-panel"><form className="login-form" onSubmit={submit}>
      <h2>内容工作台</h2><p>使用独立管理员凭据登录</p>
      <label className="field"><span>用户名</span><input autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} required /></label>
      <label className="field"><span>密码</span><input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="admin-button primary" type="submit" disabled={busy}>{busy ? "正在验证…" : "安全登录"}</button>
    </form></section>
  </div>;
}

function ChangePassword({ session, onDone }: { session: Session; onDone: () => void }) {
  const [currentPassword, setCurrent] = useState("");
  const [newPassword, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  async function submit(event: FormEvent) {
    event.preventDefault(); setError("");
    if (newPassword !== confirm) return setError("两次输入的新密码不一致");
    try {
      await api("/api/admin/password", { method: "POST", body: JSON.stringify({ currentPassword, newPassword }) });
      csrfToken = ""; onDone();
    } catch (reason) { setError((reason as Error).message); }
  }
  return <div className="login-shell"><section className="login-brand"><p>FIRST SIGN-IN</p><h1>先建立你的<br />安全边界。</h1><small>密码使用 Argon2id 存储，更新后所有会话将失效。</small></section><section className="login-panel"><form className="login-form" onSubmit={submit}>
    <h2>首次修改密码</h2><p>{session.username}，新密码至少 14 个字符。</p>
    <label className="field"><span>临时密码</span><input type="password" value={currentPassword} onChange={(e) => setCurrent(e.target.value)} required /></label>
    <label className="field"><span>新密码</span><input type="password" minLength={14} value={newPassword} onChange={(e) => setNext(e.target.value)} required /></label>
    <label className="field"><span>确认新密码</span><input type="password" minLength={14} value={confirm} onChange={(e) => setConfirm(e.target.value)} required /></label>
    {error && <p className="form-error" role="alert">{error}</p>}<button className="admin-button primary">更新密码并重新登录</button>
  </form></section></div>;
}

function LocalizedField({ label, value, onChange, multiline = false }: { label: string; value: Localized; onChange: (value: Localized) => void; multiline?: boolean }) {
  return <div className="field wide"><span>{label}</span><div className="localized">
    <label>中文 {multiline ? <textarea value={value.zh} onChange={(e) => onChange({ ...value, zh: e.target.value })} /> : <input value={value.zh} onChange={(e) => onChange({ ...value, zh: e.target.value })} />}</label>
    <label>English {multiline ? <textarea value={value.en} onChange={(e) => onChange({ ...value, en: e.target.value })} /> : <input value={value.en} onChange={(e) => onChange({ ...value, en: e.target.value })} />}</label>
  </div></div>;
}

function MarkdownField({ label, value, onChange }: { label: string; value: Localized; onChange: (value: Localized) => void }) {
  const zh = useRef<HTMLTextAreaElement>(null);
  const en = useRef<HTMLTextAreaElement>(null);
  function insert(locale: keyof Localized, prefix: string) {
    const ref = locale === "zh" ? zh.current : en.current;
    if (!ref) return;
    const start = ref.selectionStart; const end = ref.selectionEnd;
    const text = value[locale];
    onChange({ ...value, [locale]: text.slice(0, start) + prefix + text.slice(start, end) + text.slice(end) });
    requestAnimationFrame(() => ref.focus());
  }
  return <div className="field wide markdown-editor"><span>{label}</span><div className="localized">
    {(["zh", "en"] as const).map((locale) => <label key={locale}>{locale === "zh" ? "中文" : "English"}<div className="markdown-toolbar"><button type="button" onClick={() => insert(locale, "- ")}>• 列表</button><button type="button" onClick={() => insert(locale, "**")}>B</button></div><textarea ref={locale === "zh" ? zh : en} value={value[locale]} onChange={(e) => onChange({ ...value, [locale]: e.target.value })} /></label>)}
  </div></div>;
}

function ProfileEditor({ content, setContent }: EditorProps) {
  const profile = content.profile;
  function update<K extends keyof Profile>(key: K, value: Profile[K]) { const next = clone(content); next.profile[key] = value; setContent(next); }
  return <><Title title="首页与定位" detail="首屏身份、职业定位、联系信息与四段滚动叙事。" />
    <div className="editor-card"><div className="editor-grid">
      <LocalizedField label="姓名" value={profile.name} onChange={(v) => update("name", v)} />
      <LocalizedField label="职位定位" value={profile.title} onChange={(v) => update("title", v)} />
      <LocalizedField label="首屏眉题" value={profile.eyebrow} onChange={(v) => update("eyebrow", v)} />
      <LocalizedField label="定位摘要" value={profile.summary} multiline onChange={(v) => update("summary", v)} />
      <LocalizedField label="求职状态" value={profile.availability} onChange={(v) => update("availability", v)} />
      <LocalizedField label="所在地" value={profile.location} onChange={(v) => update("location", v)} />
      <label className="field"><span>公开邮箱</span><input type="email" value={profile.email} onChange={(e) => update("email", e.target.value)} /></label>
      <label className="field"><span>肖像路径</span><input value={profile.portraitUrl} onChange={(e) => update("portraitUrl", e.target.value)} /></label>
    </div></div>
    <Title title="芯片到云端叙事" detail="每段内容对应一个相机关键帧；顺序决定滚动映射。" compact />
    {content.hero.map((step, index) => <div className="editor-card" key={step.index}><div className="editor-card-header"><h3>0{index + 1} / SCENE</h3></div><div className="editor-grid"><LocalizedField label="眉题" value={step.kicker} onChange={(v) => updateHero(content, setContent, index, "kicker", v)} /><LocalizedField label="标题" value={step.title} onChange={(v) => updateHero(content, setContent, index, "title", v)} /><LocalizedField label="说明" value={step.body} multiline onChange={(v) => updateHero(content, setContent, index, "body", v)} /></div></div>)}
  </>;
}

function updateHero(content: Content, setContent: (content: Content) => void, index: number, key: keyof HeroStep, value: HeroStep[keyof HeroStep]) { const next = clone(content); (next.hero[index] as unknown as Record<string, unknown>)[key] = value; setContent(next); }

type EditorProps = { content: Content; setContent: (content: Content) => void };

function ProjectsEditor({ content, setContent }: EditorProps) {
  const [selected, setSelected] = useState(content.projects[0]?.id || "");
  const [dragged, setDragged] = useState<string | null>(null);
  const project = content.projects.find((item) => item.id === selected) || content.projects[0];
  function update<K extends keyof Project>(key: K, value: Project[K]) { if (!project) return; const next = clone(content); const target = next.projects.find((item) => item.id === project.id)!; target[key] = value; setContent(next); }
  function add() { const id = uniqueId("project"); const next = clone(content); next.projects.push({ id, slug: `new-project-${next.projects.length + 1}`, title: emptyLocalized(), summary: emptyLocalized(), role: emptyLocalized(), period: emptyLocalized(), background: emptyLocalized(), actions: emptyLocalized(), results: emptyLocalized(), stack: [], mediaIds: [], featured: false, visible: false, status: "draft", order: next.projects.length }); setContent(next); setSelected(id); }
  function remove() { if (!project || !confirm(`删除草稿项目“${project.title.zh || project.slug}”？`)) return; const next = clone(content); next.projects = next.projects.filter((item) => item.id !== project.id).map((item, index) => ({ ...item, order: index })); setContent(next); setSelected(next.projects[0]?.id || ""); }
  function drop(target: string) { if (!dragged || dragged === target) return; const next = clone(content); const from = next.projects.findIndex((p) => p.id === dragged); const to = next.projects.findIndex((p) => p.id === target); const [item] = next.projects.splice(from, 1); next.projects.splice(to, 0, item); next.projects.forEach((p, i) => p.order = i); setContent(next); setDragged(null); }
  if (!project) return <><Title title="项目" detail="尚无项目。" /><button className="admin-button primary" onClick={add}>添加项目</button></>;
  return <><Title title="项目与案例" detail="拖拽左侧项目完成排序；发布状态和精选状态彼此独立。" action={<button className="admin-button primary" onClick={add}>＋ 添加项目</button>} />
    <div className="project-editor-layout"><aside className="project-index">{content.projects.map((item) => <button key={item.id} draggable onDragStart={() => setDragged(item.id)} onDragOver={(e) => e.preventDefault()} onDrop={() => drop(item.id)} className={item.id === project.id ? "active" : ""} onClick={() => setSelected(item.id)}>{item.title.zh || "未命名项目"}<small>{item.featured ? "精选" : "归档"} · {item.visible ? "已设为发布" : "草稿"}</small></button>)}</aside>
      <section className="editor-card"><div className="editor-card-header"><h2>{project.title.zh || "新项目"}</h2><div className="editor-card-actions"><button className="admin-button danger" onClick={remove}>删除</button></div></div><div className="editor-grid">
        <label className="field"><span>Slug（小写字母、数字、连字符）</span><input value={project.slug} onChange={(e) => update("slug", e.target.value.toLowerCase())} /></label>
        <div className="field"><span>内容状态</span><div className="toggle-row"><label><input type="checkbox" checked={project.status === "published"} onChange={(e) => { const next=clone(content); const target=next.projects.find(item=>item.id===project.id)!; target.status=e.target.checked?"published":"draft"; target.visible=e.target.checked; setContent(next); }} /> 发布</label><label><input type="checkbox" checked={project.featured} onChange={(e) => update("featured", e.target.checked)} /> 精选</label></div></div>
        <LocalizedField label="项目标题" value={project.title} onChange={(v) => update("title", v)} />
        <LocalizedField label="项目简介" value={project.summary} multiline onChange={(v) => update("summary", v)} />
        <LocalizedField label="角色" value={project.role} onChange={(v) => update("role", v)} />
        <LocalizedField label="周期" value={project.period} onChange={(v) => update("period", v)} />
        <MarkdownField label="背景" value={project.background} onChange={(v) => update("background", v)} />
        <MarkdownField label="职责与关键方案" value={project.actions} onChange={(v) => update("actions", v)} />
        <MarkdownField label="验证成果" value={project.results} onChange={(v) => update("results", v)} />
        <label className="field wide"><span>技术栈（逗号分隔）</span><input value={project.stack.join(", ")} onChange={(e) => update("stack", e.target.value.split(",").map((v) => v.trim()).filter(Boolean))} /></label>
        <label className="field wide"><span>媒体 ID（逗号分隔，从媒体库复制）</span><input value={project.mediaIds.join(", ")} onChange={(e) => update("mediaIds", e.target.value.split(",").map((v) => v.trim()).filter(Boolean))} /></label>
      </div></section></div>
  </>;
}

function ExperienceEditor({ content, setContent }: EditorProps) {
  function update(index: number, key: keyof Experience, value: Experience[keyof Experience]) { const next = clone(content); (next.experiences[index] as unknown as Record<string, unknown>)[key] = value; setContent(next); }
  function add() { const next = clone(content); next.experiences.push({ id: uniqueId("experience"), company: emptyLocalized(), role: emptyLocalized(), period: emptyLocalized(), summary: emptyLocalized(), bullets: emptyLocalized(), order: next.experiences.length }); setContent(next); }
  return <><Title title="工作经历" detail="这里描述职责边界与组织贡献；具体方案留在项目案例中，避免重复。" action={<button className="admin-button primary" onClick={add}>＋ 添加经历</button>} />{content.experiences.map((item, index) => <div className="editor-card" key={item.id}><div className="editor-card-header"><h2>{item.role.zh || "未命名经历"}</h2><button className="admin-button danger" onClick={() => { const next = clone(content); next.experiences.splice(index,1); setContent(next); }}>删除</button></div><div className="editor-grid"><LocalizedField label="公司" value={item.company} onChange={(v) => update(index,"company",v)} /><LocalizedField label="岗位" value={item.role} onChange={(v) => update(index,"role",v)} /><LocalizedField label="周期" value={item.period} onChange={(v) => update(index,"period",v)} /><LocalizedField label="定位摘要" value={item.summary} multiline onChange={(v) => update(index,"summary",v)} /><MarkdownField label="职责与贡献" value={item.bullets} onChange={(v) => update(index,"bullets",v)} /></div></div>)}</>;
}

function SkillsEditor({ content, setContent }: EditorProps) {
  function add() { const next = clone(content); next.skills.push({ id: uniqueId("skill"), title: emptyLocalized(), items: [], order: next.skills.length }); setContent(next); }
  return <><Title title="能力矩阵" detail="使用可检索的技术关键词，分组保持在 4–6 个。" action={<button className="admin-button primary" onClick={add}>＋ 添加分组</button>} />{content.skills.map((group,index) => <div className="editor-card" key={group.id}><div className="editor-card-header"><h2>{group.title.zh || "未命名分组"}</h2><button className="admin-button danger" onClick={() => { const next=clone(content); next.skills.splice(index,1); setContent(next); }}>删除</button></div><div className="editor-grid"><LocalizedField label="分组名称" value={group.title} onChange={(v) => { const next=clone(content); next.skills[index].title=v; setContent(next); }} /><label className="field wide"><span>技能（每行一个）</span><textarea value={group.items.join("\n")} onChange={(e) => { const next=clone(content); next.skills[index].items=e.target.value.split("\n").map(v=>v.trim()).filter(Boolean); setContent(next); }} /></label></div></div>)}</>;
}

function CredentialsEditor({ content, setContent }: EditorProps) {
  return <><Title title="教育与荣誉" detail="只保留可验证的教育、证书和奖项。" />
    <div className="editor-card"><div className="editor-card-header"><h2>教育经历</h2><button className="admin-button" onClick={() => { const next=clone(content); next.education.push({id:uniqueId("education"),school:emptyLocalized(),degree:emptyLocalized(),period:emptyLocalized(),details:emptyLocalized(),order:next.education.length}); setContent(next); }}>＋ 添加</button></div>{content.education.map((item,index)=><div className="editor-grid" key={item.id}><LocalizedField label="学校" value={item.school} onChange={(v)=>{const n=clone(content); n.education[index].school=v;setContent(n);}}/><LocalizedField label="专业与学历" value={item.degree} onChange={(v)=>{const n=clone(content);n.education[index].degree=v;setContent(n);}}/><LocalizedField label="周期" value={item.period} onChange={(v)=>{const n=clone(content);n.education[index].period=v;setContent(n);}}/><LocalizedField label="说明" value={item.details} multiline onChange={(v)=>{const n=clone(content);n.education[index].details=v;setContent(n);}}/></div>)}</div>
    <div className="editor-card"><div className="editor-card-header"><h2>荣誉与证书</h2><button className="admin-button" onClick={()=>{const n=clone(content);n.awards.push({id:uniqueId("award"),title:emptyLocalized(),period:"",order:n.awards.length});setContent(n);}}>＋ 添加</button></div>{content.awards.map((item,index)=><div className="editor-grid" key={item.id}><LocalizedField label="名称" value={item.title} onChange={(v)=>{const n=clone(content);n.awards[index].title=v;setContent(n);}}/><label className="field"><span>时间</span><input value={item.period} onChange={(e)=>{const n=clone(content);n.awards[index].period=e.target.value;setContent(n);}}/></label><button className="admin-button danger" onClick={()=>{const n=clone(content);n.awards.splice(index,1);setContent(n);}}>删除此项</button></div>)}</div>
  </>;
}

async function optimizeImage(file: File): Promise<File> {
  if (!/^image\/(jpeg|png)$/.test(file.type)) return file;
  const bitmap = await createImageBitmap(file);
  const max = 2400; const ratio = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas"); canvas.width = Math.round(bitmap.width * ratio); canvas.height = Math.round(bitmap.height * ratio);
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height); bitmap.close();
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/webp", .84));
  if (!blob) return file;
  return new File([blob], file.name.replace(/\.[^.]+$/, ".webp"), { type: "image/webp" });
}

function MediaEditor({ onToast }: { onToast: (message: string) => void }) {
  const [media, setMedia] = useState<Media[]>([]); const [usage,setUsage]=useState(0); const [quota,setQuota]=useState(1); const [busy,setBusy]=useState(false);
  async function load() { const result=await api<{media:Media[];usage:number;quota:number}>("/api/admin/media"); setMedia(result.media);setUsage(result.usage);setQuota(result.quota); }
  useEffect(()=>{load().catch((e)=>onToast(e.message));},[]);
  async function upload(event: React.ChangeEvent<HTMLInputElement>, kind:"image"|"video") { const original=event.target.files?.[0];if(!original)return;setBusy(true);try{const file=kind==="image"?await optimizeImage(original):original;const data=new FormData();data.append("file",file);await api(`/api/admin/media?kind=${kind}`,{method:"POST",body:data});onToast(kind==="image"&&file!==original?"已在浏览器优化为 WebP 并上传":"媒体已上传");await load();}catch(e){onToast((e as Error).message);}finally{setBusy(false);event.target.value="";} }
  async function uploadPDF(event:React.ChangeEvent<HTMLInputElement>){const file=event.target.files?.[0];if(!file)return;setBusy(true);try{const data=new FormData();data.append("file",file);await api("/api/admin/document",{method:"POST",body:data});onToast("简历 PDF 已替换并立即生效");}catch(e){onToast((e as Error).message);}finally{setBusy(false);event.target.value="";}}
  async function remove(item:Media){if(!confirm(`删除 ${item.originalName}？`))return;try{await api(`/api/admin/media/${item.id}`,{method:"DELETE"});onToast("媒体已删除");await load();}catch(e){onToast((e as Error).message);}}
  return <><Title title="媒体与简历" detail={`已使用 ${(usage/1048576).toFixed(1)}MB / ${(quota/1073741824).toFixed(0)}GB；图片在浏览器端优化，视频采用流式上传。`} />
    <div className="upload-zone"><div><p>图片 ≤15MB · MP4/WebM/MOV ≤150MB · PDF ≤25MB</p><div className="admin-actions"><label className="admin-button">上传图片<input hidden type="file" accept="image/jpeg,image/png,image/webp,image/avif" disabled={busy} onChange={(e)=>upload(e,"image")}/></label><label className="admin-button">上传视频<input hidden type="file" accept="video/mp4,video/webm,video/quicktime" disabled={busy} onChange={(e)=>upload(e,"video")}/></label><label className="admin-button primary">替换简历 PDF<input hidden type="file" accept="application/pdf" disabled={busy} onChange={uploadPDF}/></label></div></div></div>
    <div className="media-grid">{media.map((item)=><article className="media-card" key={item.id}><div className="media-preview">{item.kind==="image"?<img src={`/media/${item.id}/original`} alt=""/>:<video src={`/media/${item.id}/original`} preload="metadata"/>}</div><div className="media-meta"><strong title={item.originalName}>{item.originalName}</strong><small>{item.id} · {(item.size/1048576).toFixed(1)}MB · {item.status}</small><button className="admin-button danger" onClick={()=>remove(item)}>删除</button></div></article>)}</div>
  </>;
}

function HistoryEditor({ onToast, reload }: { onToast:(m:string)=>void;reload:()=>void }) {
  const [items,setItems]=useState<Revision[]>([]);
  async function load(){const result=await api<{revisions:Revision[]}>("/api/admin/revisions");setItems(result.revisions);}
  useEffect(()=>{load().catch(e=>onToast(e.message));},[]);
  async function restore(id:string){if(!confirm("将这个版本恢复到草稿？当前已发布页面不会改变，直到你再次发布。"))return;try{await api(`/api/admin/revisions/${id}/restore`,{method:"POST",body:"{}"});onToast("历史版本已恢复到草稿");reload();}catch(e){onToast((e as Error).message);}}
  return <><Title title="历史版本" detail="每次发布都会生成不可变快照；恢复操作只覆盖草稿，不会静默改变线上内容。"/><div className="editor-card">{items.map(item=><div className="revision" key={item.id}><div><strong>{item.note} {item.active&&"· 当前发布"}</strong><small>{new Date(item.createdAt).toLocaleString()} · {item.id}</small></div><button className="admin-button" disabled={item.active} onClick={()=>restore(item.id)}>恢复到草稿</button></div>)}</div></>;
}

function Title({ title, detail, action, compact=false }: {title:string;detail:string;action?:React.ReactNode;compact?:boolean}) { return <div className="admin-section-title" style={compact?{marginTop:50}:undefined}><div><h1>{title}</h1><p>{detail}</p></div>{action}</div>; }

function Workspace({ session, onLogout }: { session:Session;onLogout:()=>void }) {
  const [tab,setTab]=useState<Tab>("profile"); const [content,setContent]=useState<Content|null>(null); const [version,setVersion]=useState(0); const [busy,setBusy]=useState(false); const [toast,setToast]=useState(""); const [publishOpen,setPublishOpen]=useState(false); const [note,setNote]=useState("");
  const tabs: {id:Tab;label:string}[]=[{id:"profile",label:"首页与定位"},{id:"projects",label:"项目案例"},{id:"experience",label:"工作经历"},{id:"skills",label:"能力矩阵"},{id:"credentials",label:"教育荣誉"},{id:"media",label:"媒体与 PDF"},{id:"history",label:"历史版本"}];
  function toastFor(message:string){setToast(message);window.setTimeout(()=>setToast(""),3500);}
  async function load(){try{const data=await api<{content:Content;version:number}>("/api/admin/content");setContent(data.content);setVersion(data.version);}catch(e){toastFor((e as Error).message);}}
  useEffect(()=>{load();},[]);
  async function save(){if(!content)return;setBusy(true);try{const result=await api<{version:number}>("/api/admin/content",{method:"PUT",body:JSON.stringify({content,version})});setVersion(result.version);toastFor("草稿已安全保存");}catch(e){toastFor((e as Error).message);}finally{setBusy(false);}}
  async function publish(){setBusy(true);try{await save();await api("/api/admin/publish",{method:"POST",body:JSON.stringify({note})});setPublishOpen(false);setNote("");toastFor("新版本已原子发布");}catch(e){toastFor((e as Error).message);}finally{setBusy(false);}}
  async function logout(){try{await api("/api/admin/session",{method:"DELETE"});}finally{csrfToken="";onLogout();}}
  const detail=useMemo(()=>`草稿版本 ${version} · 会话至 ${new Date(session.expiresAt).toLocaleTimeString()}`,[version,session.expiresAt]);
  if(!content)return <p className="admin-loading">正在读取加密内容工作区…</p>;
  return <div className="admin-shell"><aside className="admin-sidebar"><div className="admin-logo">JX<span>.</span> STUDIO</div><nav>{tabs.map(item=><button key={item.id} className={tab===item.id?"active":""} onClick={()=>setTab(item.id)}>{item.label}</button>)}</nav><div className="admin-user">{session.username}<br/><button onClick={logout}>安全退出</button></div></aside>
    <main className="admin-main"><header className="admin-topbar"><div><strong>Portfolio Content OS</strong><p>{detail}</p></div><div className="admin-actions"><a className="admin-button" href="/preview?lang=zh" target="_blank">中文预览 ↗</a><a className="admin-button" href="/preview?lang=en" target="_blank">EN Preview ↗</a><button className="admin-button" disabled={busy} onClick={save}>{busy?"处理中…":"保存草稿"}</button><button className="admin-button primary" onClick={()=>setPublishOpen(true)}>发布</button></div></header>
      <div className="admin-content">{tab==="profile"&&<ProfileEditor content={content} setContent={setContent}/>} {tab==="projects"&&<ProjectsEditor content={content} setContent={setContent}/>} {tab==="experience"&&<ExperienceEditor content={content} setContent={setContent}/>} {tab==="skills"&&<SkillsEditor content={content} setContent={setContent}/>} {tab==="credentials"&&<CredentialsEditor content={content} setContent={setContent}/>} {tab==="media"&&<MediaEditor onToast={toastFor}/>} {tab==="history"&&<HistoryEditor onToast={toastFor} reload={load}/>}</div>
    </main>{publishOpen&&<div className="login-panel" style={{position:"fixed",inset:0,zIndex:90,background:"rgba(0,0,0,.75)",backdropFilter:"blur(10px)"}}><div className="login-form editor-card"><h2>发布新版本</h2><p>将当前草稿保存为不可变快照，并原子切换公开页面。</p><label className="field"><span>版本说明</span><input autoFocus value={note} onChange={e=>setNote(e.target.value)} placeholder="例如：优化 4G 网关项目说明"/></label><div className="admin-actions"><button className="admin-button" onClick={()=>setPublishOpen(false)}>取消</button><button className="admin-button primary" disabled={busy} onClick={publish}>确认发布</button></div></div></div>}{toast&&<div className="status-toast" role="status">{toast}</div>}
  </div>;
}

function App() {
  const [session,setSession]=useState<Session|null|undefined>(undefined);
  useEffect(()=>{api<Session>("/api/admin/session").then(value=>{csrfToken=value.csrfToken;setSession(value);}).catch(()=>setSession(null));},[]);
  if(session===undefined)return <p className="admin-loading">正在建立安全会话…</p>;
  if(!session)return <Login onSuccess={setSession}/>;
  if(session.mustChangePassword)return <ChangePassword session={session} onDone={()=>setSession(null)}/>;
  return <Workspace session={session} onLogout={()=>setSession(null)}/>;
}

createRoot(document.getElementById("admin-root")!).render(<React.StrictMode><App/></React.StrictMode>);
