import { defineStore } from "pinia";

export const useSocialIconsStore = defineStore({
  id: "socialIcons",
  state: () => ({
    items: [],
  }),
});
