<script setup lang="ts">
import HomeIntro from './home/HomeIntro.vue';
import HomeIndex from './home/HomeIndex.vue';
import HomePosition from './home/HomePosition.vue';
import HomeCredits from './home/HomeCredits.vue';
import type { Position } from '@/types/Position';
import type { IconConstructor } from '@/types/IconConstructor';

import IconZeus from '@/components/iconics/IconZeus.vue';

interface HomePosition {
  data: Position;
  icon: IconConstructor;
  'html-id': string;
}

const positions: HomePosition[] = [
  {
    data: {
      title: 'Zeus by Llyc',
      position: 'Frontend Software Engineer',
      from: new Date(2024, 4, 1),
    },
    icon: {
      bg: '#f93f55',
      icon: IconZeus,
    },
    'html-id': 'zeus',
  },
];
</script>

<template>
  <div class="flex flex-col items-center mt-12 md:mt-36">
    <HomeIntro class="slide-in-delay" />
    <HomeIndex />
    <HomePosition
      v-for="(position, i) in positions"
      :key="i"
      :data="position.data"
      :icon-constructor="position.icon"
      :html-id="position['html-id']"
    />
    <HomeCredits />
  </div>
</template>
