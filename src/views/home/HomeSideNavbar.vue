<template>
  <div
    class="fixed left-0 top-1/2 -translate-y-1/2 pl-6 hidden xl:flex flex-col gap-1 slide-in-from-left z-[100]"
    style="animation-delay: 500ms"
  >
    <a
      v-for="(item, i) in items"
      :key="item.i"
      :href="item.href"
      class="px-3 py-2 flex items-center gap-3 rounded-xl transition-all duration-500 group min-w-64 hover:scale-105"
    >
      <IconFromSvg
        :bg="item['icon-bg']"
        :icon="item.icon"
      />
      <div
        class="flex-1 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
      >
        <span class="font-semibold text-heading medium-text">
          {{ item.name }}
        </span>
        <ArrowUpLeftIcon class="h-4 fill-heading ml-auto" />
      </div>
    </a>
  </div>
</template>

<script setup>
import ZeusIcon from '@/components/iconics/ZeusIcon.vue';
import IconFromSvg from '@/components/IconFromSvg.vue';
import ArrowUpLeftIcon from '@/components/iconics/ArrowUpLeftIcon.vue';

const items = [
  {
    name: 'Zeus by Llyc',
    'icon-bg': '#f93f55',
    icon: ZeusIcon,
    href: '#zeus-work',
  },
];
</script>
