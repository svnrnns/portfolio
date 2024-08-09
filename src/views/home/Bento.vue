<template>
  <div class="w-full grid grid-cols-3 grid-rows-3 h-[512px] gap-4">
    <div class="bento-item row-start-1 col-start-1 animate-pulse"></div>
    <div class="bento-item row-start-1 row-end-3 col-start-2">
      <LoopVideo src="/bento/veles.mp4" />
    </div>
    <div class="bento-item row-start-1 col-start-3 animate-pulse"></div>
    <div class="bento-item row-start-2 row-end-4 col-start-1">
      <EagerImg
        src="/bento/selfie.jpg"
        aidi="4"
      />
    </div>
    <div
      class="bento-item row-start-3 row-end-4 col-start-2 animate-pulse"
    ></div>
    <div
      class="bento-item row-start-2 row-end-4 col-start-3 animate-pulse"
    ></div>
  </div>
</template>
<script setup>
import LoopVideo from '/src/components/LoopVideo.vue';
import EagerImg from '/src/components/EagerImg.vue';
</script>
<style scoped>
.bento-item {
  @apply bg-module rounded-lg overflow-hidden;
}
</style>
