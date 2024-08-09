<template>
  <div
    class="w-full grid grid-cols-2 sm:grid-cols-3 grid-rows-4 sm:grid-rows-3 h-[668px] sm:h-[512px] gap-4 slide-in-delay"
    style="--delay: 3"
  >
    <div class="bento-item animate-pulse flex-center">Empty for now</div>
    <div class="bento-item row-span-1 sm:row-span-2">
      <LoopVideo src="/bento/veles.mp4" />
    </div>
    <div class="bento-item animate-pulse flex-center">Empty for now</div>
    <div class="bento-item row-span-2">
      <EagerImg
        src="/bento/selfie.jpg"
        aidi="4"
      />
    </div>
    <div class="bento-item row-span-2 animate-pulse flex-center">
      Empty for now
    </div>
    <div class="bento-item animate-pulse flex-center">Empty for now</div>
  </div>
</template>
<script setup>
import LoopVideo from '/src/components/LoopVideo.vue';
import EagerImg from '/src/components/EagerImg.vue';
</script>
<style scoped>
.bento-item {
  @apply bg-module rounded-lg overflow-hidden text-sm text-detail;
}
</style>
