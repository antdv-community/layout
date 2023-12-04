import type { InjectionKey } from 'vue'
import { inject, provide } from 'vue'
import type { ProLayoutProps } from './typing.ts'

export interface ProLayoutContext {
  layoutProps: ProLayoutProps
}

const ProviderKey: InjectionKey<ProLayoutContext> = Symbol('ProviderKey')

export function useProLayoutProvider(props: ProLayoutProps) {
  const ctx = {
    layoutProps: props,
  } as unknown as ProLayoutContext
  provide(ProviderKey, ctx)
  return ctx
}

export function useProLayoutContext() {
  return inject(ProviderKey, {} as unknown as ProLayoutContext)
}
