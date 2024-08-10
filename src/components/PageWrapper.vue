<template>
  <div class="flex flex-col gap-3 w-full slide-in-delay">
    <div
      class="flex items-center gap-2 pb-3"
      v-if="disclaimer"
    >
      <CircleInfoIcon class="h-3 w-3 aspect-square fill-warning" />
      <span class="text-warning text-xs sm:text-sm flex-1 leading-none">
        {{ disclaimer }}
      </span>
    </div>
    <div
      class="h-32 sm:h-64 banner flex-center overflow-hidden rounded-xl mb-3 div-pulse"
      v-if="banner"
    >
      <img
        id="banner"
        :src="banner"
        alt="article-banner"
        loading="lazy"
        draggable="false"
        class="h-full w-full object-cover opacity-0"
      />
    </div>

    <span
      class="text-2xl font-medium text-heading"
      v-if="title"
    >
      {{ title }}
    </span>
    <span
      class="text-detail"
      v-if="detail"
    >
      {{ detail }}
    </span>
    <slot />
    <router-link
      :to="to"
      class="flex items-center justify-start gap-1.5 mt-6 transition hover:underline cursor-pointer hover:-translate-x-2"
    >
      <ArrowUpRightIcon class="h-3 fill-heading" />
      <span class="text-heading text-sm">Back</span>
    </router-link>
  </div>
</template>

<script setup>
import CircleInfoIcon from './iconics/CircleInfoIcon.vue';
import ArrowUpRightIcon from '/src/components/iconics/ArrowUpLeftIcon.vue';
import { onMounted } from 'vue';

const props = defineProps(['title', 'detail', 'to', 'banner', 'disclaimer']);

onMounted(() => {
  if (props.banner != null) {
    const banner = document.getElementById('banner');

    banner.onload = () => {
      banner.classList.remove('opacity-0');
    };
  }
});
</script>
