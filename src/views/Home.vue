<template>
  <div class="screen-setup overflow-hidden flex flex-col items-center">
    <Intro class="w-full page pt-32" />
    <ActiveJob class="w-full page mt-6" />
    <Connect class="w-full page mt-3" />
  </div>
</template>

<script setup>
import Intro from "./components/Intro.vue";
import ActiveJob from "./components/ActiveJob.vue";
import Connect from "./components/Connect.vue";
</script>
