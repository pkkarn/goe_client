<script setup lang="ts">
import EntryActions from './EntryActions.vue';
import type { Entry } from '@/types';

defineProps<Entry>();
</script>

<template>
  <div class="bg-app-card rounded-xl p-4 md:p-6 mb-4 relative border border-gray-800">
    <div class="flex flex-col">
      <p class="text-4xl md:text-6xl font-medium text-app-green m-0 leading-none">{{ date }}</p>
      <p class="text-gray-500 mt-1 mb-4">{{ month }}</p>
      <p class="text-gray-300 mb-4">{{ text }}</p>
      <EntryActions />
    </div>
    <div 
      class="absolute right-4 md:right-6 bottom-4 md:bottom-6 font-bold"
      :class="points >= 0 ? 'text-orange-500' : 'text-red-500'"
    >
      {{ points >= 0 ? '+' : '' }}{{ points }}
    </div>
  </div>
</template>