import { createPinia } from "pinia";
import { createEditorStore } from "./createEditorStore";

// Main app store
export const mainPinia = createPinia();
export const useEditorStore = createEditorStore("editor");

// Preview store
export const previewPinia = createPinia();
export const usePreviewStore = createEditorStore("preview");
