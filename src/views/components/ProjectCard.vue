<template>
  <div
    class="cursor-default flex items-center justify-between transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg px-4 py-2 rounded-full"
  >
    <span class="text-black">{{ name }}</span>
    <component :is="icon" class="h-4 fill-black/20" />
  </div>
</template>

<script setup>
defineProps(["name", "icon"]);
</script>
