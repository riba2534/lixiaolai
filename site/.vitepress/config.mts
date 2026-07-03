import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import { books, site } from './books.data'
import { generateSidebar } from './sidebar'

// 顶部导航：书库 + 各书快捷入口
const nav = [
  { text: '书库', link: '/' },
  {
    text: '全部作品',
    items: books.map((b) => ({ text: b.title, link: `/books/${b.slug}/` })),
  },
  { text: '下载 PDF', link: 'https://github.com/riba2534/lixiaolai/releases/latest' },
]

export default defineConfig({
  lang: 'zh-CN',
  title: site.name,
  description: site.description,
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap',
        rel: 'stylesheet',
      },
    ],
    ['meta', { name: 'author', content: '李笑来' }],
    ['meta', { name: 'keywords', content: '李笑来,财富自由之路,韭菜的自我修养,财富的真相,专注的真相,思考的真相,让时间陪你慢慢变富,电子书,在线阅读' }],
    ['meta', { property: 'og:title', content: site.name }],
    ['meta', { property: 'og:description', content: site.description }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: `${site.url}/covers/caifu-ziyou.jpg` }],
    ['meta', { property: 'og:url', content: `${site.url}/` }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${site.url}/covers/caifu-ziyou.jpg` }],
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
    },
  },

  themeConfig: {
    logo: '/favicon.png',
    siteTitle: site.name,
    nav,
    sidebar: generateSidebar(),

    outline: { level: [2, 3], label: '本章目录' },
    docFooter: { prev: '上一章', next: '下一章' },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [{ icon: 'github', link: site.github }],

    footer: {
      message: '仅供学习交流使用 · 著作权归原作者及出版社所有',
      copyright: `内容 © 李笑来 · 本站基于 VitePress 构建，部署于 Cloudflare Pages`,
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索全书', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除',
            backButtonTitle: '返回',
            noResultsText: '没有找到结果',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
})
