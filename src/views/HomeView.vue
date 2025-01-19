<script setup lang="ts">
import HomeIntro from './home/HomeIntro.vue';
import HomeIndex from './home/HomeIndex.vue';
import HomePosition from './home/HomePosition.vue';
import HomeCredits from './home/HomeCredits.vue';
// import HomeSideNavbar from './home/HomeSideNavbar.vue';

import { positions } from '@/api/positions';
</script>

<template>
  <div class="flex-col-center gap-24 sm:gap-40 w-full page fade-in">
    <!-- <HomeSideNavbar class="fade-slide-in-from-left" /> -->
    <HomeIntro />
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
