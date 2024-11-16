<template>
  <div class="flex flex-col items-center gap-44 mt-36">
    <HomeIntro class="slide-in-delay" />
    <HomeIndex class="slide-in-delay" />
    <HomeWork
      class="slide-in-delay"
      title="Zeus by Llyc"
      position="Senior Frontend Developer"
      from="May 2023"
      icon-bg="#f93f55"
      :icon="ZeusIcon"
      item-name="zeus"
    />
    <HomeCredits />
  </div>
</template>

<script setup>
import HomeIntro from './home/HomeIntro.vue';
import HomeIndex from './home/HomeIndex.vue';
import HomeWork from './home/HomeWork.vue';
import HomeCredits from './home/HomeCredits.vue';

import ZeusIcon from '@/components/iconics/ZeusIcon.vue';
</script>
