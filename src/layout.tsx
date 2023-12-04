import { defineComponent } from 'vue'
import type { ProLayoutProps } from './typing'
import { useStyles } from './styles/layout'

const Layout = defineComponent<ProLayoutProps>(
  (props, { slots }) => {
    const { styles, cx, prefixCls } = useStyles(props)
    return () => {
      const classes = styles.value
      const cls = `${prefixCls.value}-pro-layout`
      return (
        <div class={cx(cls, classes.layoutContainer)}>{slots.default?.()}</div>
      )
    }
  },
  {
    name: 'ProLayout',
    props: ['mode', 'title']
  }
)

export default Layout
