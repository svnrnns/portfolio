<script setup lang="ts">
import TextRightArrow from '@/components/TextRightArrow.vue';
import IconWithBackground from '@/components/IconWithBackground.vue';
import { positions } from '@/api/positions';
</script>

<template>
  <div class="w-full page-block-padding-children">
    <div class="w-full flex flex-col gap-4">
      <span class="child tiny-text text-detail">Work Experience</span>
      <a
        v-for="(position, i) in positions"
        :key="i"
        class="child-full relative cursor-pointer rounded-lg hover:bg-box transition-all duration-500 group"
        :href="`#${position['html-id']}`"
      >
        <TextRightArrow :text="position.data.title" />
        <IconWithBackground
          :bg="position.icon.bg"
          :icon="position.icon.icon"
          class="absolute top-0 -translate-y-1/4 right-0 translate-x-1/4 rotate-5 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      </a>
    </div>
  </div>
</template>
