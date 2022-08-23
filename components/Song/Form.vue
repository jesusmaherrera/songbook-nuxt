<script setup lang="ts">
import type { Ref } from "vue";
const tab: Ref<string> = ref("simple");
const tabs: string[] = ref(["markdown", "simple"]);
</script>

<template>
  <div class="flex">
    <div class="grow">
      <BaseTabPanel v-model="tab" :options="tabs" />
      <BaseTabContainers v-model="tab">
        <BaseTabContainer v-if="tab === 'markdown'">
          <BaseEditBox />
        </BaseTabContainer>
        <BaseTabContainer v-if="tab === 'simple'"> Simple </BaseTabContainer>
      </BaseTabContainers>
    </div>
    <div class="grow w-70">
      <SongViewer />
    </div>
  </div>
  <div>
    <form class="mt-2">
      <BaseButton label="Publish" />
    </form>
  </div>
</template>
