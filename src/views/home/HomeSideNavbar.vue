<script setup lang="ts">
import { positions } from '@/api/positions';
import IconArrowUpLeft from '@/components/iconics/IconArrowUpLeft.vue';
import IconWithBackground from '@/components/IconWithBackground.vue';
</script>

<template>
  <nav
    class="fixed left-0 top-1/2 -translate-y-1/2 pl-6 hidden xl:flex flex-col gap-1 slide-in-from-left z-[100]"
  >
    <!-- This component is temporarily disabled due to index redundance. There is no need to have two navs at the same time in the page. -->
    <!-- Maybe in the future this will become the main nav. The idea is cool. But for now, it remains hidden -->
    <a
      v-for="(position, i) in positions"
      :key="i"
      :href="`#${position['html-id']}`"
      class="p-2 flex items-center gap-3 hover:bg-body hover:bg-gradient-to-b from-body to-light hover:ring-1 hover:ring-border hover:shadow-lg shadow-black/5 rounded-2xl transition-all duration-500 group min-w-64"
    >
      <IconWithBackground
        :bg="position.icon.bg"
        :icon="position.icon.icon"
      />
      <div
        class="flex-1 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
      >
        <span class="font-medium text-heading large-text">
          {{ position.data.title }}
        </span>
        <IconArrowUpLeft class="size-4 fill-heading ml-auto mr-2" />
      </div>
    </a>
  </nav>
</template>
