<script setup lang="ts">
import type { UserProfile } from '@/types';

defineProps<{
  user: UserProfile;
}>();
</script>

<template>
  <div class="flex items-center gap-3 md:gap-5">
    <div class="px-4 py-1.5 rounded bg-black/50 border border-gray-800">
      <span class="text-sm font-medium">Points: </span>
      <span class="text-app-green font-semibold">{{ user.points }}</span>
    </div>
    <div class="hidden md:flex items-center gap-3">
      <div class="w-9 h-9 bg-black/50 border border-gray-800 rounded-full flex items-center justify-center text-sm">
        {{ user.initials }}
      </div>
      <span class="text-sm text-gray-300">{{ user.email }}</span>
      <a href="#" class="text-sm text-app-green hover:underline">Edit Profile</a>
    </div>
    <button class="w-9 h-9 bg-black/50 border border-gray-800 rounded-lg flex items-center justify-center">
      <span class="text-lg">➡️</span>
    </button>
  </div>
</template>