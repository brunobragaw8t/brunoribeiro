<script setup lang="ts">
import { RouterView } from "vue-router";
import PreLoader from "./components/PreLoader.vue";
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <PreLoader />
  <TopBar />
  <RouterView />
</template>
