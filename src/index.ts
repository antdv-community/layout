import type { App } from 'vue'
import ProLayout from './layout'

export {
  ProLayout,
}

(ProLayout as any).install = (app: App) => {
  app.component(ProLayout.name, ProLayout)
}

export default ProLayout
