import { defineComponent } from 'vue'
import type { ProLayoutProps } from './typing'
import { useStyles } from './styles/layout'
import { useProLayoutProvider } from './context'

const ProLayout = defineComponent<ProLayoutProps>((props, { slots }) => {
  const { styles, cx, prefixCls } = useStyles(props)
  useProLayoutProvider(props)
  return () => {
    const classes = styles.value
    const cls = cx({
      [`${prefixCls.value}-pro-layout`]: true,
    }, classes.layoutContainer)
    return (
      <div class={cls}>{slots.default?.()}</div>
    )
  }
})

export default ProLayout
