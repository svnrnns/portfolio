<script setup lang="ts">
import type { Position } from '@/types/Position';
import type { IconConstructor } from '@/types/IconConstructor';
import type { PropType } from 'vue';
import IconWithBackground from '@/components/IconWithBackground.vue';

defineProps({
  data: {
    type: Object as PropType<Position>,
    required: true,
  },
  iconConstructor: {
    type: Object as PropType<IconConstructor>,
    required: true,
  },
  htmlId: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="w-full">
    <div
      class="w-full h-44"
      :id="htmlId"
    ></div>
    <div class="w-full relative">
      <IconWithBackground
        :bg="iconConstructor.bg"
        :icon="iconConstructor.icon"
        class="md:absolute md:-translate-y-1/2 md:top-1/2 right-full md:mr-4"
      />
      <span class="gigantic-text text-heading font-semibold">
        {{ data.title }}
      </span>
    </div>
  </div>
</template>
