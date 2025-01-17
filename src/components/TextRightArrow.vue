<script setup lang="ts">
import IconArrowRightLong from '@/components/iconics/IconArrowRightLong.vue';

defineProps({
  text: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <div class="w-fit flex items-center gap-3">
    <h3 class="huge-text text-heading font-medium">{{ text }}</h3>
    <IconArrowRightLong class="fill-heading h-4" />
  </div>
</template>
