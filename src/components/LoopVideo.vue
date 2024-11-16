<template>
  <video
    autoplay
    loop
    muted
    playsinline
  >
    <source
      :src="src"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</template>

<script setup>
defineProps(['src']);
</script>
