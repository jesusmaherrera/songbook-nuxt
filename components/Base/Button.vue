<template>
  <button
    type="submit"
    class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
  >
    {{ label }}
  </button>
</template>
<script setup>
const props = defineProps(["label", "cssClass"]);
</script>
