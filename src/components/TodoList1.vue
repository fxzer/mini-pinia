<script setup>
import { ref } from 'vue'
import { useTodoList1Store } from '@/store/todolist1'

const todoStore = useTodoList1Store()

const title = ref('')
</script>

<template>
  <div>
    <input v-model="title" type="text"> <button @click="todoStore.addTodo(title)">
      +
    </button>
    <div>总数：{{ todoStore.count }} --- 完成数：{{ todoStore.doneCount || 0 }}</div>
    <ul>
      <li v-for="(todo, index) in todoStore.list" :key="index">
        <input :id="todo.id" type="checkbox" :checked="todo.done" @change="todoStore.toggleDone(todo.id)">
        <label :for="todo.id">{{ todo.title }}</label>
        <button @click="todoStore.removeTodo(todo.id)">
          -
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
label {
  margin: 0 10px;
}
</style>
