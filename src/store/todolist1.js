import { defineStore } from 'pinia'

export const useTodoList1Store = defineStore({
  id: 'todoList1',
  state: () => ({
    list: [{
      id: 0,
      title: '吃饭',
      done: false,
    }, {
      id: 1,
      title: '学习',
      done: false,
    }],
  }),
  getters: {
    count() {
      return this.list.length
    },
    doneCount() {
      return this.list.filter(item => item.done).length
    },
  },
  actions: {
    addTodo(title) {
      const todo = { id: this.list.length, title }
      this.list.push(todo)
    },
    removeTodo(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    toggleDone(id) {
      this.list = this.list.map((item) => {
        if (item.id === id)
          item.done = !item.done

        return item
      })
    },
  },
})
