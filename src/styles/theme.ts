import type { ProLayoutProps } from '../typing'

export function useThemeColor(props: ProLayoutProps) {
  const theme = props.theme
  const bgColor = theme?.bgColor ?? '#fff'
  return {
    bgColor,
  }
}
