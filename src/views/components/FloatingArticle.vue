<template>
  <div class="h-full w-full flex items-center">
    <div class="w-full max-w-[600px] h-full py-[25%] flex-center" v-if="data">
      <div
        class="w-full overflow-hidden flex flex-col gap-3 transition-all"
        :class="{
          'scale-105': hovering,
        }"
      >
        <div class="w-full h-[150px] overflow-hidden rounded-3xl">
          <img :src="data.img" class="h-full w-full object-cover" />
        </div>
        <span class="text-black px-4 text-justify mt-3">
          {{ data.text }}
        </span>
        <span
          class="text-black mx-4 px-4 py-2 rounded-lg bg-module text-justify"
        >
          {{ data.comment }}</span
        >
        <div class="w-full text-end px-4 text-sm mt-3">{{ data.footer }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["data", "hovering"]);
</script>
