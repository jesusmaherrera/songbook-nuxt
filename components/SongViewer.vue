<script setup lang="ts">
import { ref, computed } from "vue";
interface Props {
  source: string;
}
interface Note {
  note: string;
  index: number;
}

const props = defineProps<Props>();
const formatedText = computed(() => {
  let lines = props.source.trim().split(/\n/);
  let line_notes: Note[] = [];
  let lines_html: string[] = [];
  lines.forEach(function (line: any) {
    const isNotesLine = line.indexOf("  ") !== -1;
    if (!isNotesLine) {
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
      lines_html.push(line);
    }
    if (isNotesLine) {
      let note = "";
      let startIndex = null;
      for (var letterIndex in line) {
        const isLastIndex = Number(letterIndex) === line.length - 1;
        if (line[letterIndex] != " ") {
          note += line[letterIndex];
          if (startIndex === null) startIndex = letterIndex;
          if (isLastIndex) {
            line_notes.push({
              note: note,
              index: Number(startIndex),
            });
          }
        } else if (startIndex != null || isLastIndex) {
          line_notes.push({
            note: note,
            index: Number(startIndex),
          });
          note = "";
          startIndex = null;
        }
      }
    }
  });
  const returnValue = lines_html.join("<br /><br />");
  return returnValue;
  // return '<span class="relative">U<span class="absolute -top-5 left-0 text-red-600 text-sm font-semibold">Rem</span></span>n joven se acercó a Jesús que sonreía,';
});
</script>
<template>
  <div class="bg-white text-gray-800 p-2 pt-5">
    <div v-html="formatedText"></div>
    <!-- <note value="Rem">U</note>n joven <note value="Solm">s</note>e acercó<note
      value="Do"
    />
    a Jesús qu<note value="Fa" />e sonreía,
    <Nbr />
    un jov<note value="La#" />en que quer<note value="Solm">í</note>a ser mejo<note
      value="La7"
    />r, <Nbr /> quiero hacer <note value="Rem" />tu voluntad<note value="Solm" />
    <Nbr /> y no sé<note value="Do" /> qué hacer, Señor,<note value="Fa" /> <Nbr /> Tú que
    eres <note value="La#" />la verdad, <note value="Solm" />dime, p<note value="La7" />or
    favor<note value="Rem" />.
    <Nbr />
    <Nbr />
    Si tú quiere<note value="La7" />s ser mi amigo,<note value="Rem" /> <Nbr /> anda y
    vende <note value="Do" />lo que tienes<note value="Fa" /> <Nbr /> y ya lib<note
      value="Solm"
    />re, ven conmig<note value="Rem" />o <Nbr /> yo te ofrez<note value="La7" />co mucho
    más.<note value="Rem" />
    <Nbr />
    <Nbr />
    Jesús l<note value="Rem" />e conte<note value="Solm" />mpló y era ale<note
      value="Do"
    />gre su mirada<note value="Fa" /> <Nbr /> y urgen<note value="La#" />te la llamada y
    le<note value="Solm" /> habló.<note value="La7" /> <Nbr /> Pero el joven
    <note value="Rem" />se marchó <note value="Solm" /> <Nbr /> sin deci<note
      value="Do"
    />r apenas nada,<note value="Fa" /> <Nbr /> como el j<note value="La#" />oven era
    rico, t<note value="Solm" />riste se<note value="La7" /> marchó.<note value="Rem" />
    <Nbr />
    <Nbr />
    Si tú quiere<note value="La7" />s ser mi amigo,<note value="Rem" /> <Nbr /> anda y
    vende <note value="Do" />lo que tienes<note value="Fa" /> <Nbr /> y ya lib<note
      value="Solm"
    />re, ven conmig<note value="Rem" />o <Nbr /> yo te ofrez<note value="La7" />co mucho
    más.<note value="Rem" />
    <Nbr /> -->
  </div>
</template>

<style></style>
