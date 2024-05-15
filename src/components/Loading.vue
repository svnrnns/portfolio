<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-left-color: transparent;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin89345 1s linear infinite;
}

@keyframes spin89345 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
