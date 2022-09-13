<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  label: {
    type: String,
    default: "",
  },
  url: {
    type: String,
  },
  image: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <a :href="url" class="flex items-center group">
    <div
      class="flex items-center justify-center rounded-full border border-white border-opacity-50 w-8 h-8 transition-all group-hover:border-primary group-hover:bg-primary"
    >
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-4 invert transition-all group-hover:invert-0"
      />

      <i
        v-if="icon"
        :class="`${icon} text-white transition-all group-hover:text-black`"
      ></i>
    </div>

    <span
      v-if="label"
      class="hidden sm:block ml-2 text-white transition-all group-hover:text-primary"
    >
      {{ label }}
    </span>
  </a>
</template>
