<template>
  <div class="screen-setup flex-center">
    <PageWrapper
      title="404 - Page not found"
      detail="Oh no..."
      to="/"
    >
      <div class="h-32 w-32 flex items-start mt-6 rounded-xl overflow-hidden">
        <img
          src="https://cdn.betterttv.net/emote/62264bb606fd6a9f5be67488/3x.webp"
          class="rounded-xl h-full w-full"
          draggable="false"
          loading="lazy"
          alt="man..."
        />
      </div>
    </PageWrapper>
  </div>
</template>

<script setup>
import PageWrapper from '../components/PageWrapper.vue';
</script>
