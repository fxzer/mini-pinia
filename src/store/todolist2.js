import { defineStore } from '@/my-pinia/defineStore'

export const useTodoList2Store = defineStore({
  id: 'todoList2',
  state: () => ({
    list: [],
  }),
  getters: {
    count() {
      return this.list.length
    },
  },
  actions: {
    addTodo(item) {
      this.list.push(item)
    },
    removeTodo(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
  },
})
