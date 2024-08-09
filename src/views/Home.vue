<template>
  <div class="flex flex-col items-center gap-12">
    <Title class="w-full" />
    <Intro class="w-full" />
    <Bento class="w-ful" />
    <ActiveJob class="w-full" />
    <Connect class="w-full" />
    <span class="text-detail text-xs w-full">
      Portfolio heavily inspired by leerob's one.
    </span>
  </div>
</template>

<script setup>
import Title from './home/Title.vue';
import Intro from './home/Intro.vue';
import Bento from './home/Bento.vue';
import ActiveJob from './home/ActiveJob.vue';
import Connect from './home/Connect.vue';
</script>
