<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="bg-app-card rounded-xl p-5 border border-gray-800">
    <h2 class="text-xl font-bold mb-3">{{ title }}</h2>
    <slot />
  </section>
</template>