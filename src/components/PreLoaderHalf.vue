<script setup lang="ts">
defineProps({
  position: String,
});
</script>

<template>
  <div
    :class="`absolute ${position} left-0 w-full h-1/2 z-0 bg-black transition-all duration-1000 ease-linear`"
  ></div>
</template>
