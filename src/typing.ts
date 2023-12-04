export interface ProLayoutProps {
  title?: string
  mode?: 'dark' | 'light'
}

export interface ProLayoutEmits {
  click: [Event]
  [key: string]: any
}

export interface ProLayoutSlots {
  default(): void
  renderTitle(params: { item: any }): void
}
