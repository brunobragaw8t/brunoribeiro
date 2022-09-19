<script setup lang="ts">
import type { TypeIconLink } from "@/interfaces";
import { ref } from "vue";
import IconLink from "./IconLink.vue";
import { apiUrl } from "@/constants";

const socialIcons = ref([] as Array<TypeIconLink>);

fetch(`${apiUrl}/social_icon/`)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      data.forEach((item: any) => {
        socialIcons.value.push({
          title: item.title.rendered,
          url: item.acf.url,
          image: item.acf.image.url,
        });
      });
    }
  });
</script>

<template>
  <div class="flex justify-center gap-2">
    <IconLink
      v-for="(item, i) in socialIcons"
      :key="i"
      :title="item.title"
      :url="item.url"
      :image="item.image"
    />
  </div>
</template>
