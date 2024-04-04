export function defineStore(...args) {
  console.log('defineStore', args)

  function useStore() {
    console.log('useStore')
  }
  return useStore
}
