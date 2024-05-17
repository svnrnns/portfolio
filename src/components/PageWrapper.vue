<template>
  <div class="screen-setup flex flex-col items-center">
    <div
      class="flex flex-col gap-3 px-[7.5%] py-[10%] sm:px-0 sm:pt-32 sm:pb-32 w-full page"
    >
      <div
        class="h-32 banner flex-center overflow-hidden rounded-xl mb-3 div-pulse"
        v-if="banner"
      >
        <img
          id="banner"
          :src="banner"
          alt="article-banner"
          loading="lazy"
          draggable="false"
          class="h-full w-full object-cover opacity-0"
        />
      </div>

      <span class="text-lg font-medium text-heading">{{ title }}</span>
      <span class="text-detail">{{ detail }}</span>
      <slot />
      <router-link
        :to="to"
        class="flex items-center justify-start gap-1.5 mt-6 transition hover:underline cursor-pointer hover:-translate-x-2"
      >
        <ArrowUpRightIcon class="h-3 fill-heading" />
        <span class="text-heading text-sm">Back</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ArrowUpRightIcon from "/src/components/iconics/ArrowUpLeftIcon.vue";
import { onMounted } from "vue";

const props = defineProps(["title", "detail", "to", "banner"]);

onMounted(() => {
  if (props.banner != null) {
    const banner = document.getElementById("banner");

    banner.onload = () => {
      banner.classList.remove("opacity-0");
    };
  }
});
</script>
