<script setup lang="ts">
// import confetti from 'canvas-confetti';
// import { ref } from 'vue';

// defineProps({
//   displayText: {
//     type: String,
//     required: true,
//   },
//   copy: {
//     type: String,
//     required: true,
//   },
// });

// const copied = ref(false);
// const error = ref(false);
// let timeout = null;

// const resetStates = () => {
//   copied.value = false;
//   error.value = false;
//   timeout = null;
// };

// const copyEmail = async () => {
//   if (copied.value || error.value) return;

//   if (timeout) clearTimeout(timeout);

//   try {
//     await navigator.clipboard.writeText('svnrnns@gmail.com');

//     const button = document.querySelector('.main-btn');
//     const rect = button.getBoundingClientRect();
//     confetti({
//       particleCount: 100,
//       angle: 90,
//       spread: 55,
//       origin: {
//         x: (rect.left + rect.width / 2) / window.innerWidth,
//         y: (rect.top + rect.height / 2) / window.innerHeight,
//       },
//     });

//     copied.value = true;
//   } catch (e) {
//     error.value = true;
//     console.warn(e);
//   } finally {
//     timeout = setTimeout(resetStates, 3000);
//   }
// };
</script>

<template>
  <!-- <div
    id="copy-email"
    class="main-btn medium-text"
    :class="{
      '!bg-success': copied,
      '!bg-danger': error,
    }"
    @click="copyEmail"
  >
    {{ displayText }}
  </div> -->
</template>
