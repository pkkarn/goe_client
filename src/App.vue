<script setup lang="ts">
import Sidebar from './components/Sidebar/Sidebar.vue';
import Header from './components/Header/Header.vue';
import EntryCard from './components/Entry/EntryCard.vue';
import RightSidebar from './components/Stats/RightSidebar.vue';
import type { Entry } from './types';

const entries: Entry[] = [
  {
    date: 11,
    month: 'December',
    text: 'worked on javascript and understood concepts',
    points: 1
  },
  {
    date: 14,
    month: 'December',
    text: 'some task explained',
    points: -2
  },
  {
    date: 15,
    month: 'December',
    text: 'some task explained',
    points: 2.65
  }
];
</script>

<template>
  <div class="flex h-screen bg-black">
    <Sidebar />
    <div class="flex-1 flex flex-col min-h-0">
      <Header />
      <div class="flex flex-1 overflow-hidden">
        <main class="flex-1 p-4 overflow-y-auto scrollbar-custom">
          <div class="max-w-4xl mx-auto">
            <EntryCard
              v-for="entry in entries"
              :key="entry.date"
              v-bind="entry"
            />
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  </div>
</template>