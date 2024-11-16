<template>
  <div
    class="size-8 overflow-hidden p-1.5 rounded-lg shadow"
    :style="{ background: bg }"
  >
    <component
      :is="icon"
      class="size-full"
    />
  </div>
</template>

<script setup>
defineProps(['icon', 'bg']);
</script>
