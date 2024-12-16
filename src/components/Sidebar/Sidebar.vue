<script setup lang="ts">
import NavButton from './NavButton.vue';

const navItems = [
  { id: 1, label: 'Grid' },
  { id: 2, label: 'Circle' },
  { id: 3, label: 'Square' },
  { id: 4, label: 'Triangle' }
];
</script>

<template>
  <aside class="hidden md:flex w-[60px] bg-black flex-col items-center pt-6 border-r border-gray-800">
    <div class="w-10 h-10 bg-black border border-gray-800 rounded-full flex items-center justify-center font-bold">
      G
    </div>
    <nav class="flex flex-col gap-4 mt-8">
      <NavButton
        v-for="item in navItems"
        :key="item.id"
        :label="item.label"
      />
    </nav>
  </aside>
</template>