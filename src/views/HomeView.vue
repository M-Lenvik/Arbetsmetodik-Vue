<script setup lang="ts">
import { ref } from 'vue';
import SingleTodo from '@/components/SingleTodo.vue';
import { useTodosStore } from '@/stores/todos.ts';
import { storeToRefs } from 'pinia';

const todoStore = useTodosStore();
const { todos } = storeToRefs(todoStore);

const todoName = ref('');
const showCompletedMessage = ref(false);
const showRemovedMessage = ref(false);

function addTodo() {
  todoStore.addNewTodo(todoName.value, false);
  todoName.value = '';
}

function onTaskCompleted() {
  showCompletedMessage.value = true;
  setTimeout(clearMessage, 3000);
}

function onTaskRemoved() {
  showRemovedMessage.value = true;
  setTimeout(clearMessage, 3000);
}

function clearMessage() {
  showCompletedMessage.value = false;
  showRemovedMessage.value = false;
}
</script>

<template>
  <main class="bg-gray-700 px-2 py-2 mx-4 my-4">
    <div class="my-8">
      <p v-if="showCompletedMessage">Snyggt jobbat med att göra klart en uppgift!</p>
      <p v-if="showRemovedMessage">Din uppgift togs bort</p>

      <div v-if="todos.length > 0" v-for="(todo, index) in todos" :key="index">
        <SingleTodo
          :todo-text="todo.text"
          :complete="todo.complete"
          :id="todo.id"
          @task-completed="onTaskCompleted"
          @task-removed="onTaskRemoved"
        />
      </div>

      <p v-if="todos.length === 0">Du är klar med alla uppgifter!</p>
    </div>
    <input type="text" v-model="todoName" class="text-black bg-white border rounded" @keyup.enter="addTodo" />
    <button @click="addTodo" class="bg-blue-500 border rounded mb-4 h-12 px-4 py-2 text-m ml-2">Lägg till todo</button>
  </main>
</template>
