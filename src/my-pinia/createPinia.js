import { effectScope, ref } from 'vue'

const piniaSymbol = Symbol('pinia')
export function createPinia() {
  const store = new Map()
  const scope = effectScope()
  const state = scope.run(() => ref({}))
  function install(app) {
    app.provide(piniaSymbol, store)
    app.config.globalProperties.$pinia = store
  }
  return {
    store,
    scope,
    state,
    install,
  }
}
