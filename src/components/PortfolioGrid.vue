<script setup lang="ts">
import { apiUrl } from "@/constants";
import type { Project } from "@/interfaces";
import { ref, computed } from "vue";
import PortfolioItem from "./PortfolioItem.vue";

const props = defineProps({
  selectedCat: {
    type: Number,
    required: true,
  },
});

const projects = ref([] as Array<Project>);

fetch(`${apiUrl}/project/?order=desc`)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      data.forEach((item: any) => {
        projects.value.push({
          id: item.id,
          title: item.title.rendered,
          image: item.acf.image.url,
          video: item.acf.video,
          categories: item.acf.categories.map((cat: any) => cat.term_id),
        });
      });
    }
  });

const filteredProjects = computed(() => {
  return projects.value.filter((item) => {
    return item.categories.includes(props.selectedCat);
  });
});
</script>

<template>
  <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <PortfolioItem
      v-for="item in filteredProjects"
      :key="item.id"
      :data="item"
    />
  </div>
</template>
