<script setup>
import { ref } from 'vue'
import { useTodoList2Store } from '@/store/todolist2'

const todoStore = useTodoList2Store()

const title = ref('')
</script>

<template>
  <div>
    <input v-model="title" type="text"> <button @click="todoStore.addTodo(title)">
      +
    </button>
    <div>总数：{{ todoStore.count }}</div>
    <ul>
      <li v-for="(todo, index) in todoStore.list" :key="index">
        <input :id="todo.id" type="checkbox" :value="todo.done">
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
