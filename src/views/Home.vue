<template>
  <div class="flex flex-col items-center gap-12">
    <Intro class="w-full" />
    <ActiveJob class="w-full" />
    <Connect class="w-full mt-3" />
  </div>
</template>

<script setup>
import Intro from './home/Intro.vue';
import ActiveJob from './home/ActiveJob.vue';
import Connect from './home/Connect.vue';
</script>
