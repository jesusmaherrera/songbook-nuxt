<script setup lang="ts">
import type { Ref } from "vue";
const song: Ref<string> = ref(`
Rem      Solm    Do          Fa
Un joven se acercó a Jesús que sonreía,
`);
</script>

<template>
  <div class="flex">
    <div class="grow">
      <BaseEditBox v-model="song" />
    </div>
    <div class="grow w-70">
      <SongViewer :source="song" />
    </div>
  </div>
  <div>
    <form class="mt-2">
      <BaseButton label="Publish" />
    </form>
  </div>
</template>

] +ñ
