<script setup lang="ts">
import { ref } from 'vue';
import { useTodosStore } from '@/stores/todos.ts';

const props = defineProps({
  id: { type: Number, required: true },
  todoText: { type: String, required: true },
  complete: { type: Boolean, default: false },
});

const todoStore = useTodosStore();

const isDone = ref(props.complete);

function toggleCompletedState() {
  isDone.value = !isDone.value;

  todoStore.toggleTodoState(props.id, isDone.value);
}
</script>

<template>
  <div :class="{ completed: isDone }" class="grid grid-cols-2 gap-2">
    <div>{{ todoText }}</div>
    <div>
      <button @click="toggleCompletedState">
        <span v-if="isDone">Avmarkera som klar</span>
        <span v-if="!isDone">Markera som klar</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.completed {
  @apply line-through; /* Eller någon styling i Sass */
}
</style>
