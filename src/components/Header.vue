<script setup lang="ts">
const points = 330;
const email = 'pk2psp@gmail.com';
const initials = 'PK';
</script>

<template>
  <header class="flex items-center justify-between px-6 py-4 bg-black">
    <div class="flex items-center flex-1 gap-6">
      <h1 class="text-2xl font-bold text-white">Game of Evolution</h1>
      <div class="relative max-w-xl flex-1">
        <input
          type="text"
          placeholder="Search entry..."
          class="search-input"
        >
      </div>
    </div>
    <div class="flex items-center gap-5">
      <div class="px-4 py-1.5 rounded bg-black/50 border border-gray-800">
        <span class="text-sm font-medium">Points: </span>
        <span class="text-app-green font-semibold">{{ points }}</span>
      </div>
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 bg-black/50 border border-gray-800 rounded-full flex items-center justify-center text-sm">
          {{ initials }}
        </div>
        <span class="text-sm text-gray-300">{{ email }}</span>
        <a href="#" class="text-sm text-app-green hover:underline">Edit Profile</a>
      </div>
      <button class="w-9 h-9 bg-black/50 border border-gray-800 rounded-lg flex items-center justify-center">
        <span class="text-lg">➡️</span>
      </button>
    </div>
  </header>
</template>