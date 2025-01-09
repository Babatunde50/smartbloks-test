<template>
    <div class="flex p-4 flex-col">
      <small class="text-xs text-gray-600">Title</small>
      <input v-model="title" class="p-4 mt-2" :placeholder="'Enter Title'" @input="inputHandler" />
    </div>
</template>
  
<script lang="ts" setup>
  import { useEditorStore } from '../store';
  import { storeToRefs } from 'pinia';
  
  const store = useEditorStore();
  const { title } = storeToRefs(store);
  
  const inputHandler = (event: Event) => {
    const target = event.target as HTMLInputElement;
    store.updateTitle(target.value);
  };
</script>

<style lang='postcss' scoped></style>