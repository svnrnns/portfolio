<template>
  <a
    :href="href"
    class="w-fit flex items-center gap-3 group"
  >
    <span class="medium-text text-heading font-semibold">{{ text }}</span>
    <ArrowRightLongIcon
      class="fill-heading h-4 group-hover:translate-x-2 transition-all duration-500"
    />
  </a>
</template>

<script setup>
import ArrowRightLongIcon from './iconics/ArrowRightLongIcon.vue';

defineProps(['text', 'href']);
</script>
