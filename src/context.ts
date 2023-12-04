import type { InjectionKey } from 'vue'
import { inject, provide } from 'vue'

export interface ProLayoutContext {}

const ProviderKey: InjectionKey<ProLayoutContext> = Symbol('ProviderKey')

export function useProLayoutProvider() {
  const ctx = {} as unknown as ProLayoutContext
  provide(ProviderKey, ctx)
  return ctx
}

export function useProLayoutContext() {
  return inject(ProviderKey, {} as unknown as ProLayoutContext)
}
