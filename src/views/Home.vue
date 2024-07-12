<template>
  <div
    class="flex flex-col items-center px-[7.5%] py-[10%] sm:px-0 sm:py-0 page mx-auto sm:my-16 gap-12"
  >
    <Navbar />
    <Intro class="w-full" />
    <ActiveJob class="w-full" />
    <Connect class="w-full mt-3" />
  </div>
</template>

<script setup>
import Navbar from './home/Navbar.vue';
import Intro from './home/Intro.vue';
import ActiveJob from './home/ActiveJob.vue';
import Connect from './home/Connect.vue';
</script>
