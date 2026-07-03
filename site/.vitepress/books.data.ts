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
    subtitle: '赎回被你出售的时间自主权',
    author: '李笑来',
    cover: '/covers/caifu-ziyou.jpg',
    intro: '财富自由不是钱多，而是不再为生活出售自己的时间。用“注意力 > 时间 > 金钱”的排序，升级你出售时间的方式。',
    pages: 0
  },
  {
    slug: 'caifu-zhenxiang',
    title: '财富的真相',
    subtitle: '财富唯一正当的来源是生产',
    author: '李笑来',
    cover: '/covers/caifu-zhenxiang.jpg',
    intro: '钱从哪来？财富唯一正当的来源是生产，把钱变成财富靠足够久的积累；而最本质的生产资料——知识和时间——人人都有。',
    pages: 0
  },
  {
    slug: 'man-man-bianfu',
    title: '让时间陪你慢慢变富',
    subtitle: '普通人靠谱的投资只有定投',
    author: '李笑来',
    cover: '/covers/man-man-bianfu.jpg',
    intro: '长期、定期、定额、选对标的。用“主动地被动”走出微笑曲线，让钱不停地替你赚钱。',
    pages: 0
  },
  {
    slug: 'sikao-zhenxiang',
    title: '思考的真相',
    subtitle: '思考只有四个要素',
    author: '李笑来',
    cover: '/covers/sikao-zhenxiang.jpg',
    intro: '定义、分类、比较、因果——再复杂的问题，也能按这个顺序拆成简单要素，逐一突破。',
    pages: 0
  },
  {
    slug: 'zhuanzhu-zhenxiang',
    title: '专注的真相',
    subtitle: '注意力是最稀缺的资源',
    author: '李笑来',
    cover: '/covers/zhuanzhu-zhenxiang.jpg',
    intro: '多巴胺不是快乐物质，而是驱使你不停刷手机的冲动物质。用一把标尺——“值吗？”——夺回你的注意力。',
    pages: 0
  },
  {
    slug: 'jiucai',
    title: '韭菜的自我修养',
    subtitle: '降低交易频次，看懂周期',
    author: '李笑来',
    cover: '/covers/jiucai.jpg',
    intro: '所谓“韭菜”，是把非零和市场当零和游戏玩的交易者。降低交易频次、看懂周期，是唯一的翻身之路。',
    pages: 0
  }
]

export const site = {
  name: '李笑来作品集',
  domain: 'xiaolai.fate.red',
  url: 'https://xiaolai.fate.red',
  github: 'https://github.com/riba2534/lixiaolai',
  description: '李笑来六部作品在线阅读：怎样思考、怎样专注、财富从哪来、如何定投、怎样穿越周期——写给普通人的成长与财富认知地图。'
}
