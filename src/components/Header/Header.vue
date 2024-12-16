<script setup lang="ts">
import SearchBar from './SearchBar.vue';
import UserInfo from './UserInfo.vue';
import type { UserProfile } from '@/types';

const user: UserProfile = {
  points: 330,
  email: 'pk2psp@gmail.com',
  initials: 'PK'
};
</script>

<template>
  <header class="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:px-6 md:py-4 bg-black gap-4">
    <div class="flex flex-col md:flex-row md:items-center flex-1 gap-4 md:gap-6 w-full">
      <h1 class="text-2xl font-bold text-white">Game of Evolution</h1>
      <SearchBar class="w-full md:w-auto" />
    </div>
    <UserInfo :user="user" />
  </header>
</template>