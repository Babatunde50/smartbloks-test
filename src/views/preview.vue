<template>
  <Site/>
</template>

<script lang='ts' setup>
import { createApp, getCurrentInstance, onMounted } from 'vue'
import Site from '../components/site.vue'
import { previewPinia } from '../store';

// Create a new app instance for the preview
const previewApp = createApp({
  components: {
    Site
  },
  template: '<Site/>'
});

previewApp.use(previewPinia);

onMounted(() => {
  previewApp.mount('#preview-app');
});
</script>