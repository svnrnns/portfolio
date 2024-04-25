<template>
  <div
    class="h-full bg-body w-full flex flex-col gap-3 rounded-xl overflow-auto pb-4"
  >
    <div class="w-full h-[100px] rounded-t-xl relative">
      <CrossIcon
        @click="$emit('close')"
        class="fill-black bg-body h-9 w-9 right-0 top-0 cursor-pointer p-2 rounded-full m-3 absolute"
      />
      <img :src="data.img" class="h-full w-full object-cover" />
    </div>
    <span class="text-black text-2xl mt-5 font-bold mx-4">{{
      data.title
    }}</span>
    <span class="text-black px-4">
      {{ data.text }}
    </span>
    <span class="text-black mx-4 px-4 py-2 rounded-lg bg-module">
      {{ data.comment }}</span
    >
    <div class="w-full text-end px-4 text-sm mt-3">{{ data.footer }}</div>
  </div>
</template>
<script setup>
import CrossIcon from "/src/components/iconics/CrossIcon.vue";
defineProps(["data", "hovering"]);
</script>
