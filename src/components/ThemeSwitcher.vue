<template>
  <div
    class="p-2 rounded-full flex items-center justify-center relative bg-module cursor-pointer"
    @click="switchTheme"
  >
    <div class="h-3 w-3"></div>
    <MoonIcon
      class="h-3 absolute transition-transform duration-500 fill-heading"
      :class="{
        anim: !isDarkMode,
      }"
    />

    <SunIcon
      class="h-4 absolute transition-transform duration-500 fill-heading"
      :class="{
        'anim rotate-180': isDarkMode,
      }"
    />
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
