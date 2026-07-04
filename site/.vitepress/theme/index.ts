import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { useRouter } from 'vitepress'
import { onMounted, nextTick } from 'vue'
import { h, defineComponent } from 'vue'
import mediumZoom from 'medium-zoom'
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
    return () => h(DefaultTheme.Layout)
  },
})

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
