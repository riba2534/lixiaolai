<div align="center">

# 李笑来作品集

### 六本书 · 一处安静的在线阅读之地

[![在线阅读](https://img.shields.io/badge/在线阅读-xiaolai.fate.red-b8863f?style=for-the-badge&logo=GoogleChrome&logoColor=white)](https://xiaolai.fate.red)
[![下载 PDF](https://img.shields.io/github/v/release/riba2534/lixiaolai?style=for-the-badge&label=下载PDF&logo=adobeacrobatreader&logoColor=white&color=2A6DBB)](https://github.com/riba2534/lixiaolai/releases/latest)
[![VitePress](https://img.shields.io/badge/VitePress-1.6-646cff?style=for-the-badge&logo=Vite&logoColor=white)](https://vitepress.dev/)
[![Cloudflare Pages](https://img.shields.io/badge/部署-Cloudflare%20Pages-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![License](https://img.shields.io/badge/用途-学习交流-4a148c?style=for-the-badge)](#-版权声明)

**将李笑来的六部作品，经 OCR 与逐章精校，制作为可全文检索、脚注跳转、护眼长读的现代网页电子书。**

</div>

---

## 📖 关于本项目

本项目收录了 **李笑来** 的六部作品，围绕 **财富、时间、专注与思考** 四个主题，把原书（含影印扫描版与文字版）统一制作为一套排版精美、体验一致的在线电子书。

其中三本为**影印扫描版**，通过本地部署的 OCR 模型做结构化识别；三本自带文字层。全部六本都经过一个**大型 AI 精校流水线**逐页 / 逐章处理——扫描版逐页比对原始扫描图，文字版结合上下文修正错别字、理顺语句、补全 OCR 丢失的内容，力求还原一个干净、通顺、可长读的文本。

> 本项目为个人学习研究用途，仅供学术交流与阅读便利，不用于任何商业目的。

## 📚 收录书目

| 书名 | 主题 | 在线阅读 |
|------|------|:--------:|
| **财富自由之路** | 通往财富自由的正确道路 | [阅读](https://xiaolai.fate.red/books/caifu-ziyou/) |
| **财富的真相** | 关于赚钱这件事的朴素道理 | [阅读](https://xiaolai.fate.red/books/caifu-zhenxiang/) |
| **让时间陪你慢慢变富** | 定投改变命运 | [阅读](https://xiaolai.fate.red/books/man-man-bianfu/) |
| **思考的真相** | 清晰思考的底层逻辑 | [阅读](https://xiaolai.fate.red/books/sikao-zhenxiang/) |
| **专注的真相** | 多巴胺与注意力的争夺战 | [阅读](https://xiaolai.fate.red/books/zhuanzhu-zhenxiang/) |
| **韭菜的自我修养** | 一个交易者的自我修炼 | [阅读](https://xiaolai.fate.red/books/jiucai/) |

## ✨ 特性

- 📚 **六书合一** — 六部作品收录于同一站点，统一的书架首页与阅读体验
- 🔍 **全文搜索** — 本地索引，跨全部书目一键关键词检索
- 📝 **脚注跳转** — 规范化脚注，支持正文引用与脚注定义间互跳
- 🎨 **中文排版** — 衬线字体、首行缩进、舒适的行距与阅读宽度
- 🖼️ **原创封面** — 每本书配一张 AI 生成的原创主题封面插画
- 📱 **响应式** — 桌面、平板、手机皆可流畅阅读
- 🌗 **深浅主题** — 一键切换，护眼长读
- 🚀 **全球 CDN** — Cloudflare Pages 边缘网络加速

## 🌐 在线阅读 / 📥 下载 PDF

| 方式 | 链接 |
|------|------|
| 💻 在线网页版 | **[xiaolai.fate.red](https://xiaolai.fate.red)** |
| 📕 下载数字版 PDF | **[Releases](https://github.com/riba2534/lixiaolai/releases/latest)** — 六本书的现代排版数字版 PDF |

PDF 数字版由 Typst 现代排版生成，含 AI 原创封面、自动目录与原生脚注。

## 🛠️ 制作流程

```
影印扫描版 PDF ─┐
                ├─→ OCR / 文本提取 ─→ 自动分章 ─→ AI 精校流水线 ─→ 精校 Markdown ─┬─→ VitePress 网站
文字层版 PDF ───┘                                                                 └─→ Typst 数字版 PDF
```

- **OCR**：影印版用本地部署的 Unlimited-OCR（vLLM）做结构化识别
- **精校**：大型 Workflow 编排数百个 AI 子任务，逐页 / 逐章校对错别字、标点、专名与语句通顺度
- **封面**：每本书由 AI 依据主题生成原创插画封面
- **网站**：VitePress 构建，`markdown-it-footnote` 渲染脚注
- **PDF**：Typst 排版，生成带目录与脚注的数字版

## 📂 目录结构

```
lixiaolai/
├── .github/workflows/
│   └── deploy.yml               # Cloudflare Pages 自动部署
├── site/                        # VitePress 多书站点
│   ├── .vitepress/
│   │   ├── config.mts           # 站点配置（多书导航、搜索、脚注、SEO）
│   │   ├── books.data.ts        # 六本书的元数据
│   │   ├── sidebar.ts           # 按书自动生成侧边栏
│   │   └── theme/               # 中文书籍排版样式
│   ├── books/                   # 六本书的精校章节
│   │   ├── caifu-ziyou/         # 财富自由之路
│   │   ├── caifu-zhenxiang/     # 财富的真相
│   │   ├── man-man-bianfu/      # 让时间陪你慢慢变富
│   │   ├── sikao-zhenxiang/     # 思考的真相
│   │   ├── zhuanzhu-zhenxiang/  # 专注的真相
│   │   └── jiucai/              # 韭菜的自我修养
│   ├── public/                  # 封面、favicon 等静态资源
│   └── index.md                 # 书架首页
└── README.md
```

## 🚀 本地开发

```bash
cd site

# 安装依赖
pnpm install

# 启动本地开发服务器（默认 http://localhost:5173）
pnpm dev

# 构建生产版本（输出到 .vitepress/dist）
pnpm build

# 本地预览构建产物
pnpm preview
```

## ☁️ 部署

推送到 `main` 分支即自动触发 [GitHub Actions](https://github.com/riba2534/lixiaolai/actions) 工作流：安装依赖 → 构建站点 → 通过 `wrangler` 部署到 Cloudflare Pages。

所需 CI Secrets：

| Secret | 说明 |
|--------|------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token（需 Pages 编辑权限） |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID |

自定义域名 `xiaolai.fate.red` 通过 CNAME 指向 Cloudflare Pages，由 Cloudflare 自动签发 SSL 证书。

## 🧰 技术栈

| 技术 | 用途 |
|------|------|
| [VitePress](https://vitepress.dev/) | Vue 驱动的静态文档生成器 |
| [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote) | Markdown 脚注支持 |
| [Typst](https://typst.app/) | 数字版 PDF 排版 |
| [pnpm](https://pnpm.io/) | 高效的包管理器 |
| [Cloudflare Pages](https://pages.cloudflare.com/) | 托管与全球 CDN |
| [GitHub Actions](https://github.com/features/actions) | 持续集成与部署 |

## 🙏 致谢

- **作者** — 李笑来
- 本项目仅做数字化整理与排版，内容版权归原作者及出版社所有

## ⚖️ 版权声明

本项目为个人学习研究用途的电子书整理，仅供学术交流与阅读便利，不用于任何商业目的。原著的著作权归原作者及出版社所有。

如认为本项目侵犯了您的合法权益，请通过 [GitHub Issues](https://github.com/riba2534/lixiaolai/issues) 联系，将在确认后及时删除。

---

<div align="center">

<sub>Built with ❤️ using VitePress · Deployed on Cloudflare Pages</sub>

</div>
