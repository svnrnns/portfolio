<script setup lang="ts">
import { marked } from 'marked';
import { onMounted, ref } from 'vue';

const props = defineProps({
  folder: {
    required: true,
    type: String,
  },
  item: {
    required: true,
    type: String,
  },
});

const success = ref<boolean>(true);
const html = ref<string>('');

const readFile = async (): Promise<string> => {
  try {
    const path = `/${props.folder}/${props.item}.md`;
    const response = await fetch(path);
    if (!response.ok) {
      success.value = false;
    }
    const markdownContent = await response.text();
    return markdownContent;
  } catch (error: unknown) {
    console.error(`Error fetchi file ${props.folder}/${props.item}`, error);
    return 'Runtime Error';
  }
};

const processImages = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const paragraphs = doc.querySelectorAll('p');

  paragraphs.forEach((p) => {
    const img = p.querySelector('img'); // Check if <p> contains an <img>
    if (img) {
      img.draggable = false;
      img.loading = 'eager';
      p.replaceWith(img); // Replace <p> with the <img>
    }
  });
  return doc.body.innerHTML;
};

const loadContent = async () => {
  const content = await readFile();
  const markedContent = await marked(content);
  html.value = processImages(markedContent);
};

onMounted(() => loadContent());
</script>

<template>
  <div class="w-full">
    <div
      v-html="html"
      class="w-full md"
      v-if="success"
    ></div>
    <div
      v-else
      class="w-full flex flex-col gap-3 page-block-raw mx-auto"
    >
      <h1>{{ props.folder }}/{{ props.item }}</h1>
      <p>
        This post could not be found. Does it exist in folder
        <strong class="underline"> {{ props.folder }} </strong>?
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
