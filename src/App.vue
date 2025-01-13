<script setup lang="ts">
import JumpToTopButton from './components/JumpToTopButton.vue';
import ThemeSwitcherButton from './components/ThemeSwitcherButton.vue';
import StorageService from './services/StorageService';

const setDarkTheme = () => {
  if (!StorageService.s.exists('isDark')) return;
  const isDarkMode = StorageService.s.get('isDark');
  if (isDarkMode) document.documentElement.setAttribute('data-theme', 'dark');
};

setDarkTheme();
</script>

<template>
  <main
    class="px-[7.5%] py-[10%] sm:px-0 sm:py-0 page mx-auto sm:my-16 flex flex-col gap-24"
  >
    <div class="fixed bottom-8 right-8 z-50 flex items-center gap-3">
      <JumpToTopButton />
      <ThemeSwitcherButton />
    </div>
    <router-view />
  </main>
</template>
