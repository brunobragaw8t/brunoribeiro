<script setup lang="ts">
import ContentWrapper from "./ContentWrapper.vue";
import IconLink from "./IconLink.vue";
import SocialIcons from "./SocialIcons.vue";
</script>

<template>
  <div class="absolute top-0 left-0 z-10 w-full">
    <ContentWrapper>
      <div class="flex items-center justify-between h-14">
        <SocialIcons />

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
