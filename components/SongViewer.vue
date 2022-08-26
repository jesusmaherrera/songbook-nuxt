<script setup lang="ts">
import { ref, computed } from "vue";
import { Note, NotesLine } from "@/types/notes";
import { getNoteLines } from "~~/utils/renderManager/getNoteLines";

interface Props {
  source: string;
}

const props = defineProps<Props>();

const formatedText = computed(() => {
  let lines = props.source.trim().split(/\n/);
  let linesWithNotes = getNoteLines(lines);
  debugger;
  let lines_html: string[] = [];
  let line_notes: Note[] = [];
  let line_notes_length: number = null;
  lines.forEach(function (line: any) {
    const isNotesLine = line.indexOf("  ") !== -1;
    if (!isNotesLine) {
      const isLongest = line.length < line_notes_length;
      if (line_notes_length !== null && isLongest) {
        const diferenceLength = line_notes_length - line.length;
        for (let index = 0; index < diferenceLength; index++) {
          line += " ";
        }
      }
      if (line_notes.length !== 0) {
        let extraLength = 0;
        line_notes.forEach((line_note) => {
          const baseLetter = line[line_note.index + extraLength];
          const newString = `<span class="relative">${baseLetter}<span class="absolute -top-5 left-0 text-red-600 text-sm font-semibold">${line_note.note}</span></span>`;
          const startString = line.substring(0, line_note.index + extraLength);
          const endString = line.substring(line_note.index + extraLength + 1);
          line = startString + newString + endString;
          extraLength += newString.length - 1;
        });
      }
      line += "<br />";
      if (line_notes.length > 0) line += "<br />";
      lines_html.push(line);
      line_notes = [];
      line_notes_length = null;
    }
    if (isNotesLine) {
    }
  });
  const returnValue = lines_html.join("");
  return returnValue;
});
</script>
<template>
  <div class="bg-white text-gray-800 p-2 pt-5">
    <div v-html="formatedText"></div>
  </div>
</template>

<style></style>
