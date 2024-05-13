<template>
  <div class="screen-setup flex-center">
    <PageWrapper
      title="404 - Page not found"
      detail="Seems like we have lost ourselves into the cyberspace..."
      to="/"
    >
      <div
        class="h-32 w-32 flex items-start mt-6 rounded-xl overflow-hidden blink"
      >
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
import PageWrapper from "../components/PageWrapper.vue";
</script>

<style scoped>
.blink {
  animation: blink 7.5s linear infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 100;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
}
</style>
