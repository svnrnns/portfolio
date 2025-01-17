<script setup lang="ts">
import type { Position } from '@/types/Position';
import type { IconConstructor } from '@/types/IconConstructor';
import type { PropType } from 'vue';
import IconWithBackground from '@/components/IconWithBackground.vue';
import { dateToMonthYearString } from '@/fns/dates';
import MakrdownToHTML from '@/components/MakrdownToHTML.vue';

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
  <div class="w-full flex flex-col gap-1.5">
    <div
      class="w-full px-20.5 py-2 flex items-center gap-3 bg-body sticky top-0"
      :id="htmlId"
    >
      <IconWithBackground
        :bg="iconConstructor.bg"
        :icon="iconConstructor.icon"
      />
      <span class="gigantic-text text-heading font-semibold">
        {{ data.title }}
      </span>
    </div>
    <span class="font-mono tiny-text text-detail w-full page-block-raw mx-auto">
      {{ dateToMonthYearString(data.from) }} -
      <span :class="{ 'text-success font-medium': !data.to }">
        {{ data.to ? dateToMonthYearString(data.to) : 'Now' }}
      </span>
    </span>
    <div class="page-block-raw w-full mx-auto">
      <span class="font-medium">
        {{ data.position }}
      </span>
    </div>

    <MakrdownToHTML
      folder="home"
      :item="htmlId"
    />
  </div>
</template>
