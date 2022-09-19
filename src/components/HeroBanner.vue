<script setup lang="ts">
import { ref } from "vue";
import { usePreLoaderStore } from "@/stores/pre-loader";
import { usePlayer } from "@vue-youtube/core";
import MainButton from "./MainButton.vue";
import VideoModal from "./VideoModal.vue";

const preLoaderStore = usePreLoaderStore();

const videoId = "zIV0OzjV73E";
const player = ref();

const { onReady, onStateChange } = usePlayer(videoId, player, {
  playerVars: {
    mute: 1,
    controls: 0,
    disablekb: 0,
    start: 7,
    end: 180,
    loop: 1,
  },
});

onReady((event) => {
  event.target.playVideo();
});

onStateChange((event) => {
  // Playing
  if (1 === event.data) {
    preLoaderStore.setLoaded();
  }

  // Ended
  if (0 === event.data) {
    event.target.seekTo(7, true);
    event.target.playVideo();
  }
});

const displayShowreel = ref(false);

const closeShowreel = () => {
  displayShowreel.value = false;
};
</script>

<template>
  <div class="relative z-0 pb-[75%] overflow-hidden md:pb-[40%]">
    <div
      ref="player"
      class="absolute right-1/2 bottom-1/2 z-0 transform translate-x-1/2 translate-y-1/2 w-[145%] h-[145%]"
    ></div>

    <img
      src="/img/hero.webp"
      alt="Bruno Ribeiro Film showreel"
      class="block md:hidden absolute top-0 let-0 z-10 w-full h-full object-cover"
    />

    <div
      class="absolute top-0 left-0 z-20 w-full h-full bg-black bg-opacity-25 md:bg-opacity-75"
    ></div>

    <div
      class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 z-30 px-4 w-[48rem] max-w-full"
    >
      <h1
        class="mb-6 text-white text-center text-2xl font-extralight md:text-6xl md:leading-tight"
      >
        Videoclips, Institucionais / Eventos e Fotografia
      </h1>

      <div class="flex justify-center gap-6">
        <MainButton @click="displayShowreel = true">Ver Showreel</MainButton>
        <MainButton>Ver Portfólio</MainButton>
      </div>
    </div>
  </div>

  <VideoModal
    :isVisible="displayShowreel"
    videoId="zIV0OzjV73E"
    @close-modal="closeShowreel"
  />
</template>
