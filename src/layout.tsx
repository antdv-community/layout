import { defineComponent } from 'vue'
import type { ProLayoutProps } from './typing'
import { useStyles } from './styles/layout'
import { useProLayoutProvider } from './context'
import BasicLayout from './components/basic-layout'

export type { ProLayoutProps, ProLayoutTheme } from './typing'

const ProLayout = defineComponent<ProLayoutProps>((props, { slots }) => {
  const { styles, cx, prefixCls } = useStyles(props)
  useProLayoutProvider(props)
  return () => {
    const classes = styles.value
    const cls = cx(
      {
        [`${prefixCls.value}`]: true,
      },
      classes.layoutContainer,
    )
    return (
      <div class={cls}>
        <BasicLayout v-slots={slots} />
      </div>
    )
  }
})

export default ProLayout
