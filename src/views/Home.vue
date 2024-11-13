<template>
  <div class="flex flex-col items-center gap-52 mt-36">
    <HomeIntro class="slide-in-delay" />
    <HomeArticle
      class="slide-in-delay"
      title="Zeus by Llyc"
      position="Senior Frontend Developer"
      from="May 2023"
      icon-bg="#f93f55"
      :icon="ZeusIcon"
      item-name="zeus"
    />
    <!-- <Title class="w-full" />
    <HomeIntro class="w-full" />
    <Bento class="w-ful" />
    <ActiveJob class="w-full" />
    <Connect class="w-full" /> -->
    <HomeCredits />
  </div>
</template>

<script setup>
import Title from './home/Title.vue';
import HomeIntro from './home/HomeIntro.vue';
import HomeArticle from './home/HomeArticle.vue';
import HomeCredits from './home/HomeCredits.vue';

import ZeusIcon from '/src/components/iconics/ZeusIcon.vue';
import Bento from './home/Bento.vue';
import ActiveJob from './home/ActiveJob.vue';
import Connect from './home/Connect.vue';
</script>
