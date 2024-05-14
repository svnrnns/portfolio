<template>
  <div
    class="screen-setup flex flex-col items-center px-[7.5%] py-[10%] !overflow-auto sm:!overflow-hidden sm:px-0 sm:py-0"
  >
    <Intro class="w-full page sm:pt-32" />
    <ActiveJob class="w-full page mt-6" />
    <Connect class="w-full page mt-3" />
  </div>
</template>

<script setup>
import Intro from "./components/Intro.vue";
import ActiveJob from "./components/ActiveJob.vue";
import Connect from "./components/Connect.vue";
</script>
