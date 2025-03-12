<script setup lang="ts">
import { ref } from 'vue';
import { useTodosStore } from '@/stores/todos.ts';

const props = defineProps({
  id: { type: Number, required: true },
  todoText: { type: String, required: true },
  complete: { type: Boolean, default: false },
});

const emit = defineEmits(['taskCompleted', 'taskRemoved']);

const todoStore = useTodosStore();

const isDone = ref(props.complete);

function toggleCompletedState() {
  isDone.value = !isDone.value;

  if (isDone.value) {
    emit('taskCompleted');
  }
  todoStore.toggleTodoState(props.id, isDone.value);
}

function removeTodo() {
  emit('taskRemoved'); //Skicka signal till HomeView

  todoStore.removeTodo(props.id); //Anropa removeTodo-funktionen i store
}
</script>

<template>
  <div :class="{ completed: isDone }" class="grid grid-cols-2 gap-2">
    <div>{{ todoText }}</div>
    <div class="space-x-2">
      <button @click="toggleCompletedState" class="bg-green-500 text-white min-w-[170px] h-12 px-2 py-2 rounded my-2">
        <span v-if="isDone">Avmarkera som klar</span>
        <span v-if="!isDone">Markera som klar</span>
      </button>

      <button @click="removeTodo" class="bg-red-500 text-white min-w-[100px] h-12 px-4 py-2 text-sm rounded">
        Ta bort
      </button>
    </div>
  </div>
</template>

<style scoped>
.completed {
  @apply line-through; /* Eller någon styling i Sass */
}
</style>
