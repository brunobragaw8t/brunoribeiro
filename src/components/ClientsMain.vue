<script setup lang="ts">
import { apiUrl } from "@/constants";
import type { Client } from "@/interfaces";
import { ref } from "vue";
import ContentWrapper from "./ContentWrapper.vue";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";

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
      <swiper
        :modules="[Autoplay]"
        :slides-per-view="2"
        :breakpoints="{ 576: { slidesPerView: 3 }, 768: { slidesPerView: 4 } }"
        :loop="true"
        :autoplay="true"
      >
        <swiper-slide v-for="item in clients" :key="item.id">
          <div class="flex justify-center">
            <a v-if="item.url" :href="item.url" target="_blank" class="group">
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
        </swiper-slide>
      </swiper>
    </ContentWrapper>
  </div>
</template>
