<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
});
const selected = inject("selected");
</script>

<template>
  <div v-if="selected === name">
    <slot />
  </div>
</template>
