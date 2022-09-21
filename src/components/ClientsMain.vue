<script setup lang="ts">
import { apiUrl } from "@/constants";
import type { Client } from "@/interfaces";
import { ref } from "vue";
import ContentWrapper from "./ContentWrapper.vue";

const clients = ref([] as Array<Client>);

fetch(`${apiUrl}/client/?order=desc`)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      data.forEach((item: any) => {
        clients.value.push({
          id: item.id,
          title: item.title.rendered,
          image: item.acf.logo.url,
          url: item.acf.site,
        });
      });
    }
  });
</script>

<template>
  <div v-if="clients && clients.length" class="py-8 bg-gray-100">
    <ContentWrapper>
      <div class="flex gap-5 justify-center">
        <div v-for="item in clients" :key="item.id" class="group">
          <a v-if="item.url" :href="item.url" target="_blank">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-28 h-20 object-contain grayscale transform-gpu transition-all group-hover:grayscale-0"
            />
          </a>

          <img
            v-else
            :src="item.image"
            :alt="item.title"
            class="w-28 h-20 object-contain grayscale transform-gpu transition-all group-hover:grayscale-0"
          />
        </div>
      </div>
    </ContentWrapper>
  </div>
</template>
