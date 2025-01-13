<script setup lang="ts">
import IconArrowUpLeft from './iconics/IconArrowUpLeft.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref<boolean>(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleScroll = () => {
  isVisible.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div
    class="opacity-0 pointer-events-none hover:scale-110 transition-all duration-300"
    :class="{
      '!opacity-100 !pointer-events-auto': isVisible,
    }"
    @click="scrollToTop"
  >
    <div
      class="p-1.5 rounded-lg flex items-center justify-center bg-module shadow cursor-pointer"
    >
      <IconArrowUpLeft class="size-4 fill-heading" />
    </div>
  </div>
</template>
