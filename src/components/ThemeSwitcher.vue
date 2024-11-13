<template>
  <div class="fixed top-8 right-8 z-50">
    <div
      class="p-2 rounded-lg flex items-center justify-center relative bg-module shadow cursor-pointer"
      @click="switchTheme"
    >
      <div class="h-3 w-3"></div>
      <SunIcon
        class="h-3 absolute transition-transform duration-500 fill-heading"
        :class="{
          anim: !isDarkMode,
        }"
      />

      <MoonIcon
        class="h-4 absolute transition-transform duration-500 fill-heading"
        :class="{
          'anim rotate-180': isDarkMode,
        }"
      />
    </div>
  </div>
</template>

<script setup>
import SunIcon from './iconics/SunIcon.vue';
import MoonIcon from './iconics/MoonIcon.vue';
import { ref } from 'vue';

const isDarkMode = ref(localStorage.getItem('isDark') === 'true');

const switchTheme = function switchThemeFunction() {
  const htmlTag = document.documentElement;

  if (isDarkMode.value) {
    isDarkMode.value = false;
    localStorage.setItem('isDark', false);
    htmlTag.removeAttribute('data-theme');
    return;
  }

  isDarkMode.value = true;
  localStorage.setItem('isDark', true);

  htmlTag.setAttribute('data-theme', 'dark');
};
</script>
<style scoped>
.anim {
  transform: rotate(360deg) scale(0);
}
</style>
