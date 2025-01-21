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
    <div>
      <ul v-if="todos.length > 0">
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
        </li>
      </ul>

      <p v-if="todos.length === 0">Du är klar med alla uppgifter!</p>
    </div>
    <input type="text" v-model="todoName" @keyup.enter="addTodo" />
    <button @click="addTodo">Lägg till todo</button>
  </main>
</template>
