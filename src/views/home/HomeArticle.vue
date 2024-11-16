<template>
  <div class="w-full flex flex-col gap-1.5">
    <div
      class="w-full sticky top-2"
      :id="itemName"
    >
      <div
        class="flex items-center gap-3 relative w-fit py-3 pr-3 transition-all duration-150"
        :class="{ 'article-title-shadow bg-body': isTitleSticky }"
      >
        <div
          v-if="icon && iconBg"
          class="size-8 overflow-hidden p-1.5 rounded-lg md:absolute md:-translate-y-1/2 md:top-1/2 right-full md:mr-4 shadow"
          :style="{ background: iconBg }"
        >
          <component
            :is="icon"
            class="size-full"
          />
        </div>
        <h1>{{ title }}</h1>

        <Tag
          :text="tag"
          v-if="tag"
        />
      </div>
    </div>
    <span class="font-mono tiny-text text-detail mt-1.5">
      {{ from }} -
      <span :class="{ 'text-success font-bold': !to }">
        {{ to ?? 'Now' }}
      </span>
    </span>
    <span> {{ position }} </span>
    <MarkdownHTML
      folder="home"
      :item="itemName"
    />
  </div>
</template>

<script setup>
import Tag from '/src/components/Tag.vue';
import MarkdownHTML from '/src/components/MarkdownHTML.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue';

const props = defineProps([
  'title',
  'tag',
  'icon',
  'iconBg',
  'from',
  'to',
  'position',
  'itemName',
]);

const isTitleSticky = ref(false);

const checkIfElementIsSticky = (element) => {
  const rect = element.getBoundingClientRect();
  const top = rect.top;

  if (top <= 20) isTitleSticky.value = true;
  else isTitleSticky.value = false;
};

onMounted(() => {
  const stickyElement = document.getElementById(props.itemName);

  checkIfElementIsSticky(stickyElement);
  const handleScroll = () => checkIfElementIsSticky(stickyElement);

  window.addEventListener('scroll', handleScroll);

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>
