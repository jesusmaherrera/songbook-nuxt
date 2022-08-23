<script setup lang="ts">
interface Props {
  modelValue: string;
  options: string[];
}
defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);
function submitClick(value) {
  emit("update:modelValue", value);
}
</script>
<template>
  <ul
    class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
  >
    <li class="mr-2" v-for="option in options" :key="option">
      <a
        href="#"
        aria-current="page"
        @click.prevent="submitClick(option)"
        class="inline-block p-4 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
        :class="{ 'bg-gray-100': option === modelValue }"
        >{{ option }}</a
      >
    </li>
  </ul>
</template>
