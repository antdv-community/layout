import { createStyles } from 'antdv-style'
import type { ProLayoutProps } from '../../../typing'
import { useThemeColor } from '../../../styles/theme'

export const useStyles = createStyles(({ css }, props: ProLayoutProps) => {
  const { bgColor } = useThemeColor(props)
  return {
    basicLayout: {
      boxSizing: 'border-box',
      height: '100%',
      width: '100%',
    },
    header: {
    //   backgroundColor: bgColor,
    },
    sider: css`
      background-color: ${bgColor};
    `
  }
})
