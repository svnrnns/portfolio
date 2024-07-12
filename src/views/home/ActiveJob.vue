<template>
  <div class="flex flex-col gap-1.5 w-full transition-all hover:translate-x-2">
    <a
      href="https://zeus.vision"
      target="_blank"
      class="w-full rounded bg-module px-6 py-4 flex slide-in-delay gap-6 items-center transition-all"
      style="--delay: 4"
    >
      <ZeusIcon class="h-9 fill-rose-400" />
      <div class="flex flex-col">
        <span class="text-lg font-medium text-heading"> Zeus by LLYC </span>
        <span class="text-font"> Frontend Developer </span>
      </div>
      <ArrowUpLeftIcon class="h-4 rotate-90 fill-font ml-auto" />
    </a>
  </div>
</template>

<script setup>
import ArrowUpLeftIcon from '/src/components/iconics/ArrowUpLeftIcon.vue';
import ZeusIcon from '/src/components/iconics/ZeusIcon.vue';
</script>
