<script setup lang="ts">
import HomeIntro from './home/HomeIntro.vue';
import HomeCredits from './home/HomeCredits.vue';
</script>

<template>
  <div class="flex flex-col items-center mt-12 md:mt-36">
    <HomeIntro class="slide-in-delay" />
    <HomeCredits />
  </div>
</template>
