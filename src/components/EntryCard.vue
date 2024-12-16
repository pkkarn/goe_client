<script setup lang="ts">
defineProps<{
  date: number;
  month: string;
  text: string;
  points: number;
}>();
</script>

<template>
  <div class="bg-app-card rounded-xl p-6 mb-4 relative border border-gray-800">
    <div class="flex flex-col">
      <p class="text-6xl font-medium text-app-green m-0 leading-none">{{ date }}</p>
      <p class="text-gray-500 mt-1 mb-4">{{ month }}</p>
      <p class="text-gray-300 mb-4">{{ text }}</p>
      <div class="flex gap-2">
        <button class="action-button">🗑</button>
        <button class="action-button">✏️</button>
      </div>
    </div>
    <div 
      class="absolute right-6 bottom-6 font-bold"
      :class="points >= 0 ? 'text-orange-500' : 'text-red-500'"
    >
      {{ points >= 0 ? '+' : '' }}{{ points }}
    </div>
  </div>
</template>