// theme-without-fonts：不打包 VitePress 默认的 Inter 字体（正文用不到，白占每页 66KB 预载）
import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme } from 'vitepress'
import { useRouter, useData } from 'vitepress'
import { onMounted, onUnmounted, nextTick, ref } from 'vue'
import { h, defineComponent } from 'vue'
import mediumZoom from 'medium-zoom'
// 自托管 Noto Serif SC：拉丁子集走 fontsource，中文子集按全站语料裁剪（site/scripts/subset-fonts.py）
// 同源分发，不依赖 Google Fonts；每字重约 500KB，命中 _headers 的 immutable 缓存
import '@fontsource/noto-serif-sc/latin-400.css'
import '@fontsource/noto-serif-sc/latin-600.css'
import '@fontsource/noto-serif-sc/latin-700.css'
import './fonts.css'
import './custom.css'

// 侧栏标题单行省略后，悬停显示完整标题（原生 title 提示）
function setSidebarTitles() {
  document
    .querySelectorAll<HTMLElement>('.VPSidebarItem .VPLink .text')
    .forEach((el) => el.setAttribute('title', el.textContent?.trim() ?? ''))
}

// 正文图片：懒加载 + 点击放大（medium-zoom）。排除书架卡片 / 落地页封面。
let zoom: ReturnType<typeof mediumZoom> | null = null
function enhanceImages() {
  if (zoom) {
    zoom.detach()
    zoom = null
  }
  zoom = mediumZoom({ margin: 24, background: 'rgba(0, 0, 0, 0.9)' })
  document.querySelectorAll<HTMLImageElement>('.vp-doc img').forEach((img) => {
    if (img.closest('.book-card__cover') || img.closest('.book-landing__cover')) return
    img.setAttribute('loading', 'lazy')
    img.style.cursor = 'zoom-in'
    zoom?.attach(img)
  })
}

// 顶部阅读进度条（首页不显示）
const ReadingProgress = defineComponent({
  setup() {
    const { frontmatter } = useData()
    const pct = ref(0)
    let raf = 0
    const update = () => {
      raf = 0
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      pct.value = max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    onMounted(() => {
      update()
      window.addEventListener('scroll', schedule, { passive: true })
      window.addEventListener('resize', schedule, { passive: true })
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    })
    return () =>
      frontmatter.value.layout === 'home'
        ? null
        : h(
            'div',
            { class: 'reading-progress', 'aria-hidden': 'true' },
            h('div', { class: 'reading-progress__bar', style: { width: pct.value + '%' } })
          )
  },
})

const Layout = defineComponent({
  setup() {
    const router = useRouter()
    onMounted(() => {
      setSidebarTitles()
      enhanceImages()
      router.onAfterRouteChanged = () => {
        nextTick(() => {
          setSidebarTitles()
          enhanceImages()
        })
      }
    })
    return () => h(DefaultTheme.Layout, null, { 'layout-top': () => h(ReadingProgress) })
  },
})

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
