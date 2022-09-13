<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    default: "button",
  },
});
</script>

<template>
  <component
    :is="tag"
    class="border border-white py-3 px-4 transition-all hover:bg-primary hover:border-primary group"
  >
    <div
      class="text-white text-sm font-bold uppercase transition-all group-hover:text-black"
    >
      <slot />
    </div>
  </component>
</template>
