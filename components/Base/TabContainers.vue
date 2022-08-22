<script setup lang="ts">
interface Props {
  modelValue: string;
}
const props = defineProps<Props>();
provide("selected", props.modelValue);
</script>

<template>
  <div>
    <slot />
  </div>
</template>
