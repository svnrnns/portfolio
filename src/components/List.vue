<template>
  <div class="flex flex-col divide-y divide-font/20">
    <router-link
      :to="to + item[param]"
      class="flex items-center justify-between py-3 cursor-pointer"
      v-for="item in data"
    >
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <span class="text-heading hover:underline">{{ item[name] }}</span>
        <span
          class="text-sm"
          v-if="item[detail]"
          >{{ item[detail] }}</span
        >
      </div>
      <span class="text-sm">{{ item[date] }}</span>
    </router-link>
  </div>
</template>

<script setup>
defineProps(['to', 'param', 'name', 'detail', 'date', 'data']);
</script>
