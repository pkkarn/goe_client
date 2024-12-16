<script setup lang="ts">
const emit = defineEmits<{
  delete: [],
  edit: []
}>();
</script>

<template>
  <div class="flex gap-2">
    <button class="action-button" @click="emit('delete')">🗑</button>
    <button class="action-button" @click="emit('edit')">✏️</button>
  </div>
</template>