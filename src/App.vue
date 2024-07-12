<template>
  <main
    class="px-[7.5%] py-[10%] sm:px-0 sm:py-0 page mx-auto sm:my-16 flex flex-col gap-24"
  >
    <Navbar />
    <router-view />
  </main>
</template>

<script setup>
import Navbar from './views/Navbar.vue';
</script>
