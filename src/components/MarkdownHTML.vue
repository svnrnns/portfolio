<template>
  <div class="w-full">
    <div
      v-html="html"
      class="w-full"
      v-if="success"
    ></div>
    <div
      v-else
      class="w-full flex flex-col gap-3"
    >
      <h1>{{ props.item }}</h1>
      <p>
        This post could not be found. Does it exist in folder
        <strong> {{ props.folder }} </strong>?
      </p>
      <div class="h-32 w-32 flex items-start mt-6 rounded-xl overflow-hidden">
        <img
          src="https://cdn.betterttv.net/emote/60bf61a1f8b3f62601c3a9cd/3x.webp"
          class="rounded-xl h-full w-full"
          draggable="false"
          loading="lazy"
          alt="sadgers"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { marked } from 'marked';

const props = defineProps(['folder', 'item']);
const success = ref(true);

const readFile = async function readMarkdownFile() {
  try {
    const path = `/src/api/${props.folder}/${props.item}.md`;
    const response = await fetch(path);
    if (!response.ok) {
      success.value = false;
    }
    const markdownContent = await response.text();
    return markdownContent;
  } catch (error) {
    console.error('Error fetching the file:', error);
    return 'Runtime error';
  }
};

const html = ref('');

async function loadContent() {
  const content = await readFile();
  html.value = marked(content);
}

onMounted(() => loadContent());
</script>
