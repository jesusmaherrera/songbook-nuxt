<script setup lang="ts">
import type { Ref } from "vue";
const tab: Ref<string> = ref("preview");
</script>
<template>
  <div>
    <BaseTabPanel />
    <BaseTabContainers v-model="tab">
      <BaseTabContainer name="markdown"> markdown </BaseTabContainer>
      <BaseTabContainer name="preview"> preview </BaseTabContainer>
    </BaseTabContainers>
    <form>
      <BaseEditBox />
      <BaseButton label="Publish" />
    </form>
  </div>
</template>
