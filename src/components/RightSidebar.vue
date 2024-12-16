<script setup lang="ts">
const stats = {
  totalHours: 946,
  totalPoints: 330,
  topics: ['#Blockchain', '#YoutubeVideo', '#etc']
};
</script>

<template>
  <aside class="w-[320px] p-4 bg-black border-l border-gray-800">
    <div class="space-y-4">
      <section class="bg-app-card rounded-xl p-5 border border-gray-800">
        <h2 class="text-xl font-bold mb-3">Streaks</h2>
        <div class="text-4xl font-medium">
          <span class="text-app-green">8+</span>
          <span class="text-white">Days</span>
        </div>
      </section>

      <section class="bg-app-card rounded-xl p-5 border border-gray-800">
        <h2 class="text-xl font-bold mb-3">Statistics</h2>
        <div class="space-y-2 text-sm text-gray-300">
          <p>Total Hours: {{ stats.totalHours }}</p>
          <p>Total Points: {{ stats.totalPoints }}</p>
          <p>Topics: {{ stats.topics.join(', ') }}</p>
        </div>
      </section>
    </div>
  </aside>
</template>