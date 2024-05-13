<template>
  <div class="flex flex-col gap-3">
    <div class="flex gap-3 items-center slide-in-delay" style="--delay: 6">
      <ShieldCheckIcon class="h-4 fill-font" />
      <span>Currently working at</span>
    </div>
    <span
      class="text-lg font-medium text-heading slide-in-delay"
      style="--delay: 7"
      >Zeus - Smart Visual Data</span
    >
    <span class="slide-in-delay" style="--delay: 7">Frontend Developer</span>
    <div
      class="w-full h-px bg-detail/30 slide-in-delay my-9"
      style="--delay: 8"
    ></div>
  </div>
</template>

<script setup>
import ShieldCheckIcon from "/src/components/iconics/ShieldCheckIcon.vue";
</script>
