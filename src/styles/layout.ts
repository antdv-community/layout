import type { ProLayoutProps } from '../typing'
import { createStyles } from 'antdv-style'

export const useStyles = createStyles(({ css }, _props: ProLayoutProps) => {
  return {
    layoutContainer: css`
        box-sizing: border-box;
        width: 100%;
        height: 100%;
      `,
  }
})
