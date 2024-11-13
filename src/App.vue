<template>
  <main
    class="px-[7.5%] py-[10%] sm:px-0 sm:py-0 page mx-auto sm:my-16 flex flex-col gap-24"
  >
    <!-- <Navbar /> -->
    <ThemeSwitcher />
    <router-view />
  </main>
</template>

<script setup>
import ThemeSwitcher from '/src/components/ThemeSwitcher.vue';
import Navbar from './views/Navbar.vue';

const setDarkTheme = () => {
  const isDarkMode = localStorage.getItem('isDark') === 'true';

  if (isDarkMode) document.documentElement.setAttribute('data-theme', 'dark');
};

setDarkTheme();
</script>
