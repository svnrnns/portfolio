<template>
  <div class="w-full h-full flex-center">
    <Loading v-if="!isReady" />
    <img
      :id="aidi"
      :src="src"
      loading="eager"
      draggable="false"
      class="object-cover opacity-0 h-full w-full"
    />
  </div>
</template>

<script setup>
import Loading from './Loading.vue';
import { ref, onMounted } from 'vue';

const props = defineProps(['aidi', 'src']);
const isReady = ref(false);

onMounted(() => {
  const img = document.getElementById(props.aidi);

  img.onload = () => {
    isReady.value = true;
    img.style.opacity = 100;
  };
});
</script>
