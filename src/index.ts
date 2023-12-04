import type { App } from 'vue'
import ProLayout from './layout.vue'

export {
  ProLayout,
}

ProLayout.install = (app: App) => {
  app.component(ProLayout.name, ProLayout)
}

export default ProLayout
