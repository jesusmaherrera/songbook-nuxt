<script setup lang="ts">
import { ref, computed } from "vue";
import { Note, NotesLine } from "@/types/notes";
import { getLines } from "~~/utils/renderManager/getNoteLines";

interface Props {
  source: string;
}

const props = defineProps<Props>();

const formatedText = computed(() => {
  let lines = props.source.trim().split(/\n/);
  let linesWithNotes = getLines(lines);
  return linesWithNotes;
});
</script>
<template>
  <div class="bg-white text-gray-800 p-2 pt-5">
    <div v-html="formatedText"></div>
  </div>
</template>

<style></style>
