<script setup lang="ts">
import type { HexColor } from '@/types/HexColor';
import type { PropType } from 'vue';
import type { Component } from 'vue';
defineProps({
  icon: {
    type: Object as PropType<Component>,
    required: true,
  },
  bg: {
    type: String as PropType<HexColor>,
    required: true,
  },
});
</script>

<template>
  <div
    class="size-8 overflow-hidden p-1.5 rounded-lg shadow"
    :style="{ background: bg }"
  >
    <component
      :is="icon"
      class="size-full"
    />
  </div>
</template>
