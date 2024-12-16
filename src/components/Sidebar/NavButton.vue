<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <button class="nav-button" :aria-label="label" />
</template>