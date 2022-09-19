<script setup lang="ts">
defineProps({
  isVisible: Boolean,
  image: String,
});
</script>

<template>
  <div
    v-if="isVisible"
    class="flex items-center justify-center fixed top-0 left-0 z-50 px-4 w-full h-full bg-black bg-opacity-75"
  >
    <div class="relative w-[62rem] max-w-full">
      <button
        class="flex items-center justify-center absolute right-0 bottom-full w-9 h-9 group"
        @click="$emit('closeModal')"
      >
        <i
          class="fas fa-times text-white text-2xl transition-all group-hover:text-primary"
        ></i>
      </button>

      <img :src="image" class="block w-full h-auto" />
    </div>
  </div>
</template>
