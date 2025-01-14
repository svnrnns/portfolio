<script setup lang="ts">
import IconArrowRightLong from '@/components/iconics/IconArrowRightLong.vue';

defineProps({
  text: {
    required: true,
    type: String,
  },
  href: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <a
    :href="href"
    class="w-fit flex items-center gap-3 hover:translate-x-2 transition-all duration-500"
  >
    <h3 class="huge-text text-heading font-medium">{{ text }}</h3>
    <IconArrowRightLong class="fill-heading h-4" />
  </a>
</template>
