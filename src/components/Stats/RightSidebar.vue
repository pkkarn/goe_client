<script setup lang="ts">
import StatsCard from './StatsCard.vue';
import type { Stats } from '@/types';

const stats: Stats = {
  totalHours: 946,
  totalPoints: 330,
  topics: ['#Blockchain', '#YoutubeVideo', '#etc']
};
</script>

<template>
  <aside class="hidden lg:block w-[320px] p-4 bg-black border-l border-gray-800">
    <div class="space-y-4">
      <StatsCard title="Streaks">
        <div class="text-4xl font-medium">
          <span class="text-app-green">8+</span>
          <span class="text-white">Days</span>
        </div>
      </StatsCard>

      <StatsCard title="Statistics">
        <div class="space-y-2 text-sm text-gray-300">
          <p>Total Hours: {{ stats.totalHours }}</p>
          <p>Total Points: {{ stats.totalPoints }}</p>
          <p>Topics: {{ stats.topics.join(', ') }}</p>
        </div>
      </StatsCard>
    </div>
  </aside>
</template>