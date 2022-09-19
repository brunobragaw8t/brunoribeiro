<script setup lang="ts">
import IconLink from "./IconLink.vue";
import ContentWrapper from "./ContentWrapper.vue";
import SocialIcons from "./SocialIcons.vue";
</script>

<template>
  <div
    class="relative z-0 py-12 bg-[url('/footer-bg.webp')] bg-center bg-cover text-white text-center"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"
    ></div>

    <ContentWrapper class="relative z-10">
      <div class="font-bold mb-2">Entra em contacto</div>

      <div class="flex justify-center mb-6">
        <IconLink
          title="Email"
          icon="far fa-envelope"
          label="brunoribeiromedia@gmail.com"
          url="mailto:brunoribeiromedia@gmail.com"
        />
      </div>

      <SocialIcons />

      <p class="mt-8 text-xs">
        2014 - {{ new Date().getFullYear() }} &copy; Bruno Ribeiro Film
      </p>
    </ContentWrapper>
  </div>
</template>
