<script setup lang="ts">
defineProps<{
  placeholder?: string;
}>();
</script>

<template>
  <div class="relative max-w-xl flex-1">
    <input
      type="text"
      :placeholder="placeholder ?? 'Search entry...'"
      class="search-input"
    >
  </div>
</template>