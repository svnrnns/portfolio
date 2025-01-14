<script setup lang="ts">
import generateUuid from '@/fns/uuid';
import confetti from 'canvas-confetti';
import { ref } from 'vue';

defineProps({
  displayText: {
    type: String,
    required: true,
  },
  copy: {
    type: String,
    required: true,
  },
});

const uuid = generateUuid();
const copied = ref<boolean>(false);
const error = ref<boolean>(false);
let timeout: number | null = null;

const resetStates = () => {
  copied.value = false;
  error.value = false;
  timeout = null;
};

const copyEmail = async () => {
  if (copied.value || error.value) return;

  if (timeout) clearTimeout(timeout);

  try {
    await navigator.clipboard.writeText('svnrnns@gmail.com');

    const button = document.getElementById(uuid);
    if (!button) return;

    const rect = button.getBoundingClientRect();
    confetti({
      particleCount: 100,
      angle: 90,
      spread: 55,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });

    copied.value = true;
  } catch (e) {
    error.value = true;
    console.warn(e);
  } finally {
    timeout = setTimeout(resetStates, 3000);
  }
};
</script>

<template>
  <div
    :id="uuid"
    class="text-btn large-text bg-heading text-body"
    :class="{
      [uuid]: true,
      '!bg-success': copied,
      '!bg-danger': error,
    }"
    @click="copyEmail"
  >
    {{ displayText }}
  </div>
</template>
