<script setup lang="ts">
import { ref } from "vue";
import type { TypeIconLink } from "@/interfaces";
import { apiUrl } from "@/constants";
import ContentWrapper from "./ContentWrapper.vue";
import IconLink from "./IconLink.vue";

const socialIcons = ref([] as Array<TypeIconLink>);

fetch(`${apiUrl}/social_icon/`)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      data.forEach((item: any) => {
        socialIcons.value.push({
          title: item.title,
          url: item.acf.url,
          image: item.acf.image.url,
        });
      });
    }
  });
</script>

<template>
  <div class="absolute top-0 left-0 z-10 w-full">
    <ContentWrapper>
      <div class="flex items-center justify-between h-14">
        <div class="flex gap-2">
          <IconLink
            v-for="(item, i) in socialIcons"
            :key="i"
            :title="item.title"
            :url="item.url"
            :image="item.image"
          />
        </div>

        <div>
          <IconLink
            title="Email"
            icon="far fa-envelope"
            label="brunoribeiromedia@gmail.com"
            url="mailto:brunoribeiromedia@gmail.com"
          />
        </div>
      </div>
    </ContentWrapper>
  </div>
</template>
