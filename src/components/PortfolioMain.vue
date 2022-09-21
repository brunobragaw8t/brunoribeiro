<script setup lang="ts">
import { ref } from "vue";
import type { TypeCategory } from "@/interfaces";
import { apiUrl } from "@/constants";
import ContentWrapper from "./ContentWrapper.vue";
import PortfolioGrid from "./PortfolioGrid.vue";

const categories = ref([] as Array<TypeCategory>);
const selectedCat = ref(0);

fetch(`${apiUrl}/project_category/?order=desc`)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      data.forEach((item: any) => {
        categories.value.push({
          id: item.id,
          title: item.name,
        });
      });

      if (categories.value.length) {
        selectedCat.value = categories.value[0].id;
      }
    }
  });
</script>

<template>
  <div class="py-14" id="portfolio">
    <ContentWrapper>
      <div class="flex justify-center gap-4 mb-8">
        <button
          v-for="category in categories"
          :key="category.id"
          class="relative z-0"
          @click="selectedCat = category.id"
        >
          <span
            :class="`relative z-10 font-bold text-sm uppercase transition-all ${
              selectedCat === category.id ? 'text-primary' : ''
            }`"
          >
            {{ category.title }}
          </span>
        </button>
      </div>

      <PortfolioGrid :selectedCat="selectedCat" />
    </ContentWrapper>
  </div>
</template>
