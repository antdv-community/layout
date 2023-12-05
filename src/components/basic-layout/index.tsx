import { defineComponent } from 'vue'
import { Layout } from 'ant-design-vue'
import { useProLayoutContext } from '../../context'
import { useStyles } from './styles'

export default defineComponent(() => {
  const ctx = useProLayoutContext()
  const { styles, cx } = useStyles(ctx.layoutProps)
  return () => {
    const classes = styles.value
    return (
      <Layout class={cx(classes.basicLayout)}>
        <Layout.Header class={cx(classes.header)}>
          测试头部
        </Layout.Header>
        <Layout>
          <Layout.Sider class={cx(classes.sider)}>
            测试侧边栏
          </Layout.Sider>
        </Layout>
      </Layout>
    )
  }
})
