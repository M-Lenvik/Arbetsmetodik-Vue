<script setup lang="ts">
defineProps({
  todoText: { type: String, required: true },
  complete: { type: Boolean, default: false },
});
</script>

<template>
  <div :class="{ completed: complete }">{{ todoText }}</div>
</template>

<style scoped>
.completed {
  @apply line-through; /* Eller någon styling i Sass */
}
</style>
