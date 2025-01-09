<template>
   <div class="flex h-screen">
      <div class="w-1/5 bg-gray-50 border-r shadow">
         <Sidebar />
      </div>
      <div class="w-4/5 p-3">
         <div class="border h-full flex flex-col rounded">
            <div class="h-16 px-3 flex items-center border-b">
               <div class="border px-2 py-1 bg-gray-100 flex item-center justify-center rounded">
                  <i class="ri-global-line text-gray-500"></i>
                  <small class="text-xs text-gray-600 leading-0 mt-1 ml-1">https://testsite.smartbloks.site</small>
               </div>
            </div>
            <iframe 
              ref="previewFrame"
              class="w-full flex-1" 
              src="/preview"
              title="Site Preview"
              @load="handleIframeLoad"
            />
         </div>
      </div>
   </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useEditorStore } from '../store';
import Sidebar from '../components/Sidebar.vue';
import { UPDATE_TITLE } from '../constants.ts'

const store = useEditorStore();
const { title } = storeToRefs(store);
const previewFrame = ref<HTMLIFrameElement | null>(null);

const isIframeReady = ref(false);

const sendMessageToPreview = (newTitle: string) => {
  if (!isIframeReady.value || !previewFrame.value?.contentWindow) return;

  previewFrame.value.contentWindow.postMessage({
    type: UPDATE_TITLE,
    title: newTitle
  }, '*');
};

const handleIframeLoad = () => {
  isIframeReady.value = true;
  // Send initial state
  sendMessageToPreview(title.value);
};

// Watch for store changes (in the main) and send to preview
watch(title, (newTitle) => {
  sendMessageToPreview(newTitle);
}, { immediate: true });
</script>