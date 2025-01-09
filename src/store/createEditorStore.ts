import { defineStore } from "pinia";

interface EditorState {
  title: string;
}

export function createEditorStore(storeId: string) {
  return defineStore(storeId, {
    state: (): EditorState => ({
      title: "Hello",
    }),

    actions: {
      updateTitle(newTitle: string) {
        this.title = newTitle;
      },
    },
  });
}
