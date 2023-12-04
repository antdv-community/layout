import { createStyles } from 'antdv-style'
import type { ProLayoutProps } from '../typing'

export const useStyles = createStyles(({ css }, { mode }: ProLayoutProps) => {
  return {
    layoutContainer: css`
        box-sizing: border-box;
        min-height: 300px;
        height: 100%;
        background-color: ${mode === 'dark' ? '#001529' : '#fff'};
      `,
  }
})
