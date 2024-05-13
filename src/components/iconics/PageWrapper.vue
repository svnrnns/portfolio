<template>
  <div class="screen-setup overflow-hidden flex flex-col items-center">
    <div class="flex flex-col gap-3 pt-32 w-full page">
      <span class="text-lg font-medium text-heading">{{ title }}</span>
      <span class="text-detail">{{ text }}</span>
      <slot />
      <router-link
        to="/"
        class="flex items-center justify-start gap-1.5 mt-6 transition hover:underline cursor-pointer"
      >
        <ArrowUpRightIcon class="h-3 fill-heading" />
        <span class="text-heading text-sm">Back</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ArrowUpRightIcon from "/src/components/iconics/ArrowUpLeftIcon.vue";

defineProps(["title", "text"]);
</script>
