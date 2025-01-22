<script setup lang="ts">
import { ref } from 'vue';
import SingleTodo from '@/components/SingleTodo.vue';
import { useTodosStore } from '@/stores/todos.ts';
import { storeToRefs } from 'pinia';

const todoStore = useTodosStore();
const { todos } = storeToRefs(todoStore);

const todoName = ref('');
const showCompletedMessage = ref(false);

function addTodo() {
  todoStore.addNewTodo(todoName.value, false);
}

function onTaskCompleted() {
  showCompletedMessage.value = true;
  setTimeout(clearMessage, 3000);
}

function clearMessage() {
  showCompletedMessage.value = false;
}
</script>

<template>
  <main>
    <div class="my-8">
      <p v-if="showCompletedMessage">Snyggt jobbat med att göra klart en uppgift!</p>

      <div v-if="todos.length > 0" v-for="(todo, index) in todos" :key="index">
        <SingleTodo :todo-text="todo.text" :complete="todo.complete" :id="todo.id" @task-completed="onTaskCompleted" />
      </div>

      <p v-if="todos.length === 0">Du är klar med alla uppgifter!</p>
    </div>
    <input type="text" v-model="todoName" @keyup.enter="addTodo" />
    <button @click="addTodo">Lägg till todo</button>
  </main>
</template>
