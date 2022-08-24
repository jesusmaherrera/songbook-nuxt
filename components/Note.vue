<script setup lang="ts">
interface Props {
  value: string;
}
defineProps<Props>();
</script>

<template>
  <span class="relative">
    <slot />
    <span class="absolute -top-5 left-0 text-red-600 text-sm font-semibold">{{
      value
    }}</span>
  </span>
</template>
