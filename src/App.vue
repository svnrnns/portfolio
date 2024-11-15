<template>
  <main
    class="px-[7.5%] py-[10%] sm:px-0 sm:py-0 page mx-auto sm:my-16 flex flex-col gap-24"
  >
    <div class="fixed bottom-8 right-8 z-50 flex items-center gap-3">
      <JumpToTop />
      <ThemeSwitcher />
    </div>
    <router-view />
  </main>
</template>

<script setup>
import JumpToTop from './components/JumpToTop.vue';
import ThemeSwitcher from '/src/components/ThemeSwitcher.vue';

const setDarkTheme = () => {
  const isDarkMode = localStorage.getItem('isDark') === 'true';

  if (isDarkMode) document.documentElement.setAttribute('data-theme', 'dark');
};

setDarkTheme();
</script>
