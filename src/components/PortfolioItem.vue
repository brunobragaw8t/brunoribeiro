<script setup lang="ts">
import type { Project } from "@/interfaces";
import { ref } from "vue";
import VideoModal from "./VideoModal.vue";
import ImageModal from "./ImageModal.vue";
import MediaModal from "./MediaModal.vue";

defineProps({
  data: {
    type: Object as () => Project,
    required: true,
  },
});

const displayModal = ref(false);

const closeModal = () => {
  displayModal.value = false;
};
</script>

<template>
  <div
    class="relative pb-[56.25%] cursor-pointer overflow-hidden group"
    @click="displayModal = true"
  >
    <img
      :src="data.image"
      :alt="data.title"
      class="absolute top-0 left-0 z-0 block w-full h-full object-cover"
    />

    <div
      class="absolute bottom-0 right-full z-20 py-2 px-3 w-full bg-primary transition-all group-hover:right-0"
    >
      <div class="font-bold text-sm uppercase">
        {{ data.title }}
      </div>
    </div>
  </div>

  <MediaModal
    :isVisible="displayModal"
    :videoId="data.videoId"
    :image="data.image"
    @close-modal="closeModal"
  />
</template>
