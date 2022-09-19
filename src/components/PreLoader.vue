<script setup lang="ts">
import { computed } from "vue";
import { usePreLoaderStore } from "@/stores/pre-loader";
import { storeToRefs } from "pinia";
import PreLoaderHalf from "./PreLoaderHalf.vue";

const preLoaderStore = usePreLoaderStore();
const { isLoaded } = storeToRefs(preLoaderStore);

const preLoaderHalf1Position = computed(() => {
  return isLoaded.value ? "top-0 transform -translate-y-full" : "top-0";
});
const preLoaderHalf2Position = computed(() => {
  return isLoaded.value ? "bottom-0 transform translate-y-full" : "bottom-0";
});
const logoOpacity = computed(() => {
  return isLoaded.value ? "opacity-0" : "opacity-1";
});
</script>

<template>
  <div
    class="flex items-center justify-center fixed bottom-0 left-0 z-50 w-full h-full overflow-hidden pointer-events-none"
  >
    <PreLoaderHalf :position="preLoaderHalf1Position" />
    <PreLoaderHalf :position="preLoaderHalf2Position" />

    <div class="relative z-1">
      <img
        src="/img/icon-40x40--inverted.png"
        alt="Bruno Ribeiro Film icon"
        :class="`absolute top-2.5 right-[2.125rem] animate-spin ${logoOpacity} duration-1000`"
      />

      <img
        src="/img/logo-208x151--inverted.png"
        alt="Bruno Ribeiro Film logo"
        :class="`${logoOpacity} duration-1000`"
      />
    </div>
  </div>
</template>
