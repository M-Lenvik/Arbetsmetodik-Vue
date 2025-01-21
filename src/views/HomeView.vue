<script setup lang="ts">
import { ref } from 'vue';

const todos = ref<string[]>([]);
const todoName = ref('');

function addTodo() {
  todos.value.push(todoName.value);
}
</script>

<template>
  <main>
    <input type="text" v-model="todoName" @keyup.enter="addTodo" />
    <button @click="addTodo">Lägg till todo</button>
  </main>
</template>
