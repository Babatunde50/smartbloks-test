<template>
    <div class="flex p-10 h-full">
      <h4 class="text-4xl">{{ title }}</h4>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, onUnmounted, watch } from 'vue';
  import { usePreviewStore } from '../store';
  import { storeToRefs } from 'pinia';
  import { UPDATE_TITLE } from '../constants.ts'
  
  const previewStore = usePreviewStore();
  const { title } = storeToRefs(previewStore);
  
  
  const handleMessage = (event: MessageEvent) => {
    if (event.data.type === UPDATE_TITLE) {
      previewStore.updateTitle(event.data.title);
    }
  };
  
  onMounted(() => {
    window.addEventListener('message', handleMessage);
  });
  
  onUnmounted(() => {
    window.removeEventListener('message', handleMessage);
  });
  </script>