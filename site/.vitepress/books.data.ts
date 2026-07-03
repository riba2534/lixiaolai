// 李笑来作品合集 — 全部书籍元数据（config、首页、sidebar 共用）
// slug 与 site/books/<slug>/ 目录一一对应

export interface BookMeta {
  slug: string
  title: string
  subtitle?: string
  author: string
  cover: string // public 下的路径
  intro: string // 一句话简介（首页卡片用）
  pages: number // 数字版 PDF 页数（填 Release 用，构建后回填）
}

export const books: BookMeta[] = [
  {
    slug: 'caifu-ziyou',
    title: '财富自由之路',
    subtitle: '通往财富自由的正确道路',
    author: '李笑来',
    cover: '/covers/caifu-ziyou.jpg',
    intro: '重新定义“财富自由”，从升级操作系统、打磨最重要的能力开始，一步步走向真正的自由。',
    pages: 0
  },
  {
    slug: 'caifu-zhenxiang',
    title: '财富的真相',
    subtitle: '关于赚钱这件事的朴素道理',
    author: '李笑来',
    cover: '/covers/caifu-zhenxiang.jpg',
    intro: '心平气和地谈钱：财富从何而来、生产资料的终极来源，以及普通人应如何正当地积累财富。',
    pages: 0
  },
  {
    slug: 'man-man-bianfu',
    title: '让时间陪你慢慢变富',
    subtitle: '定投改变命运',
    author: '李笑来',
    cover: '/covers/man-man-bianfu.jpg',
    intro: '把时间当作朋友，用定投与长期主义对抗人性的弱点，让复利在岁月里慢慢发挥威力。',
    pages: 0
  },
  {
    slug: 'sikao-zhenxiang',
    title: '思考的真相',
    subtitle: '清晰思考的底层逻辑',
    author: '李笑来',
    cover: '/covers/sikao-zhenxiang.jpg',
    intro: '拨开思维的迷雾：认识概念、厘清逻辑、校准判断，重建一套更清晰、更可靠的思考方式。',
    pages: 0
  },
  {
    slug: 'zhuanzhu-zhenxiang',
    title: '专注的真相',
    subtitle: '多巴胺与注意力的争夺战',
    author: '李笑来',
    cover: '/covers/zhuanzhu-zhenxiang.jpg',
    intro: '从脑科学视角理解专注：多巴胺系统如何被劫持，又该如何夺回这个时代最稀缺的资源——注意力。',
    pages: 0
  },
  {
    slug: 'jiucai',
    title: '韭菜的自我修养',
    subtitle: '一个交易者的自我修炼',
    author: '李笑来',
    cover: '/covers/jiucai.jpg',
    intro: '写给每一个在市场里被称作“韭菜”的人：认清宿命、修炼心性，把交易做成一场自我成长的修行。',
    pages: 0
  }
]

export const site = {
  name: '李笑来作品集',
  domain: 'xiaolai.fate.red',
  url: 'https://xiaolai.fate.red',
  github: 'https://github.com/riba2534/lixiaolai',
  description: '李笑来作品精校电子书合集，支持全文检索、脚注跳转、响应式阅读。'
}
