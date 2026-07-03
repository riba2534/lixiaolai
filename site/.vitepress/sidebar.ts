// 构建期扫描各书章节目录，自动生成 VitePress 多书 sidebar。
// 每本书的章节在 site/books/<slug>/*.md，文件名形如 NN-标题.md。
// sidebar key 用 /books/<slug>/ 前缀，这样进入某本书时只显示该书目录。

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { books } from './books.data'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BOOKS_DIR = path.resolve(__dirname, '../books')

// 从 md 文件的 frontmatter 或首个 # 标题提取展示标题
function extractTitle(file: string, fallback: string): string {
  try {
    const content = fs.readFileSync(file, 'utf-8')
    const fm = content.match(/^---\n([\s\S]*?)\n---/)
    if (fm) {
      const m = fm[1].match(/title:\s*["']?(.+?)["']?\s*$/m)
      if (m) return m[1].trim()
    }
    const h1 = content.match(/^#\s+(.+)$/m)
    if (h1) return h1[1].trim()
  } catch {}
  return fallback
}

// 生成单本书的章节条目（按文件名排序）
function bookItems(slug: string) {
  const dir = path.join(BOOKS_DIR, slug)
  if (!fs.existsSync(dir)) return []
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'index.md')
    .sort()
  return files.map((f) => {
    const base = f.replace(/\.md$/, '')
    const title = extractTitle(path.join(dir, f), base.replace(/^\d+[-.]?\s*/, ''))
    return { text: title, link: `/books/${slug}/${base}` }
  })
}

// 每本书的侧边栏：一个「返回书库」链接 + 该书全部章节
export function generateSidebar() {
  const sidebar: Record<string, any> = {}
  for (const b of books) {
    sidebar[`/books/${b.slug}/`] = [
      {
        text: '📚 返回书库',
        link: '/',
      },
      {
        text: b.title,
        items: bookItems(b.slug),
      },
    ]
  }
  return sidebar
}

// 生成首页书架 HTML（供 index.md 内嵌）
export function shelfHtml() {
  return books
    .map(
      (b) => `  <a class="book-card" href="/books/${b.slug}/">
    <div class="book-card__cover"><img src="${b.cover}" alt="${b.title}" loading="lazy"></div>
    <div class="book-card__body">
      <div class="book-card__title">${b.title}</div>
      <div class="book-card__subtitle">${b.subtitle ?? ''}</div>
      <div class="book-card__intro">${b.intro}</div>
      <div class="book-card__cta">开始阅读</div>
    </div>
  </a>`
    )
    .join('\n')
}
