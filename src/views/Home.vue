<template>
  <div
    class="screen-setup flex flex-col items-center px-[7.5%] py-[10%] sm:px-0 sm:py-0"
  >
    <Intro class="w-full page sm:pt-32" />
    <ActiveJob class="w-full page mt-6" />
    <Connect class="w-full page mt-3 sm:pb-32" />
  </div>
</template>

<script setup>
import Intro from "./home/Intro.vue";
import ActiveJob from "./home/ActiveJob.vue";
import Connect from "./home/Connect.vue";
</script>
