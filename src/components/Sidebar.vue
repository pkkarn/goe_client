<script setup lang="ts">
const navItems = ['grid', 'circle', 'square', 'triangle'].map((_, index) => index + 1);
</script>

<template>
  <aside class="w-[60px] bg-black flex flex-col items-center pt-6 border-r border-gray-800">
    <div class="w-10 h-10 bg-black border border-gray-800 rounded-full flex items-center justify-center font-bold">
      G
    </div>
    <nav class="flex flex-col gap-4 mt-8">
      <button 
        v-for="item in navItems" 
        :key="item"
        class="nav-button"
      />
    </nav>
  </aside>
</template>