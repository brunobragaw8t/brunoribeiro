import { defineStore } from "pinia";

export const usePreLoaderStore = defineStore({
  id: "preLoader",
  state: () => ({
    loaded: false,
  }),
  getters: {
    isLoaded: (state) => state.loaded,
  },
  actions: {
    setLoaded() {
      this.loaded = true;
    },
  },
});
