<script setup lang="ts">
defineProps({
  isVisible: Boolean,
  videoId: {
    required: false,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
});
</script>

<template>
  <div
    v-if="isVisible"
    class="flex items-center justify-center fixed top-0 left-0 z-50 px-4 w-full h-full bg-black bg-opacity-75"
  >
    <div
      :class="`relative ${videoId ? 'w-[62rem]' : 'max-w-[62rem] max-h-[90%]'}`"
    >
      <button
        class="flex items-center justify-center absolute right-0 bottom-full w-9 h-9 group"
        @click="$emit('closeModal')"
      >
        <i
          class="fas fa-times text-white text-2xl transition-all group-hover:text-primary"
        ></i>
      </button>

      <div v-if="videoId" class="relative pb-[56.25%]">
        <iframe
          :src="`https://www.youtube.com/embed/${videoId}?autoplay=1`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>

      <div v-else class="flex items-center justify-center">
        <img :src="image" class="w-full h-auto max-h-[90vh]" />
      </div>
    </div>
  </div>
</template>
