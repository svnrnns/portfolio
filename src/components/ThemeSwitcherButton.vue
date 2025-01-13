<script setup lang="ts">
import IconSun from './iconics/IconSun.vue';
import IconMoon from './iconics/IconMoon.vue';
import { onMounted, ref } from 'vue';
import StorageService from '@/services/StorageService';

const isDarkMode = ref<boolean>(false);

onMounted(() => {
  if (StorageService.s.exists('isDark')) {
    isDarkMode.value = StorageService.s.get('isDark');
  }
});

const switchTheme = () => {
  const htmlTag = document.documentElement;

  if (isDarkMode.value) {
    isDarkMode.value = false;
    StorageService.s.set('isDark', false);
    htmlTag.removeAttribute('data-theme');
    return;
  }

  isDarkMode.value = true;
  StorageService.s.set('isDark', true);

  htmlTag.setAttribute('data-theme', 'dark');
};
</script>

<template>
  <div class="hover:scale-110 transition-all duration-300">
    <div
      class="p-2 rounded-lg flex items-center justify-center relative bg-module shadow cursor-pointer"
      @click="switchTheme"
    >
      <div class="size-3"></div>
      <IconSun
        class="size-4 absolute transition-transform duration-500 fill-heading"
        :class="{
          anim: !isDarkMode,
        }"
      />

      <IconMoon
        class="size-4 absolute transition-transform duration-500 fill-heading"
        :class="{
          'anim rotate-180': isDarkMode,
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.anim {
  transform: rotate(360deg) scale(0);
}
</style>
