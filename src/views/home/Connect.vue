<template>
  <div class="flex flex-col gap-5">
    <span
      class="text-lg font-medium text-heading slide-in-delay"
      style="--delay: 5"
      >Connect</span
    >
    <ul
      class="flex items-center gap-3 slide-in-delay"
      style="--delay: 6"
    >
      <li v-for="item in connect">
        <a
          class="flex items-center gap-1.5"
          target="_blank"
          :href="item.href"
        >
          <ArrowUpLeftIcon class="h-3 fill-font rotate-90" />
          <span class="clickable">{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ArrowUpLeftIcon from '/src/components/iconics/ArrowUpLeftIcon.vue';

const connect = [
  {
    name: 'twitter',
    href: 'https://twitter.com/svnrnns',
  },
  {
    name: 'mail',
    href: 'mailto:harueel@gmail.com',
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/svnrnns/',
  },
];
</script>
