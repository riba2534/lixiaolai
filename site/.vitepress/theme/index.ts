import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { inBrowser, useRouter } from 'vitepress'
import { onMounted, nextTick } from 'vue'
import { h, defineComponent } from 'vue'
import './custom.css'

// 侧栏标题单行省略后，悬停显示完整标题（原生 title 提示）
function setSidebarTitles() {
  document
    .querySelectorAll<HTMLElement>('.VPSidebarItem .VPLink .text')
    .forEach((el) => el.setAttribute('title', el.textContent?.trim() ?? ''))
}

const Layout = defineComponent({
  setup() {
    const router = useRouter()
    onMounted(() => {
      setSidebarTitles()
      router.onAfterRouteChanged = () => nextTick(setSidebarTitles)
    })
    return () => h(DefaultTheme.Layout)
  },
})

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
