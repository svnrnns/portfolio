<template>
  <span
    class="py-1 px-3 rounded-full ring-1 ring-tag-border bg-tag text-tag-text tiny-text h-fit shadow"
  >
    {{ text }}
  </span>
</template>

<script setup>
defineProps(['text']);
</script>
