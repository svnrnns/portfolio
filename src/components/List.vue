<template>
  <div class="w-full">
    <div
      class="flex flex-col divide-y divide-font/20"
      v-if="data.length > 0"
    >
      <router-link
        :to="`/post?folder=${item.folder}&item=${item.item}`"
        class="flex items-center justify-between py-3 cursor-pointer"
        :key="item.item"
        v-for="item in data"
      >
        <div
          class="flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <span class="text-heading hover:underline">{{ item.name }}</span>
          <span
            class="text-sm text-detail"
            v-if="item.detail"
          >
            {{ item.detail }}
          </span>
        </div>
        <span class="text-sm">{{ item.date }}</span>
      </router-link>
    </div>
    <span v-else>This list is empty</span>
  </div>
</template>

<script setup>
defineProps(['data']);
</script>
