<script setup lang="ts">
import type { Project } from "@/interfaces";

defineProps({
  data: {
    type: Object as () => Project,
    required: true,
  },
});
</script>

<template>
  <div class="relative z-0 pb-[56.25%] cursor-pointer overflow-hidden group">
    <div
      class="absolute top-0 left-0 z-10 w-full h-full bg-white bg-opacity-50 opacity-0 transition-all duration-1000 group-hover:opacity-100"
    ></div>

    <img
      :src="data.image"
      :alt="data.title"
      class="absolute top-0 left-0 z-0 block w-full h-full object-cover transition-all duration-1000 group-hover:transform group-hover:rotate-2 group-hover:scale-110"
    />

    <div
      class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 z-20 w-11/12 opacity-0 transition-all duration-1000 group-hover:opacity-100"
    >
      <div class="text-center font-bold text-sm uppercase">
        {{ data.title }}
      </div>
    </div>
    <!-- {{ data.id }}<br />
    <br />
    {{ data.image }}<br />
    {{ data.video }}<br /> -->
  </div>
</template>
