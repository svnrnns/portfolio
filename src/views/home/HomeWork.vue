<template>
  <div class="w-full">
    <div
      class="w-full h-44"
      :id="htmlId"
    ></div>
    <div class="w-full flex flex-col gap-1.5">
      <div
        class="w-full sticky top-2"
        :id="itemName"
      >
        <div
          class="flex items-center gap-3 relative w-fit py-3 pr-3 transition-all duration-150"
          :class="{ 'work-title-shadow bg-body': isTitleSticky }"
        >
          <IconFromSvg
            v-if="icon && iconBg"
            class="md:absolute md:-translate-y-1/2 md:top-1/2 right-full md:mr-4"
            :bg="iconBg"
            :icon="icon"
          />
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
      <span class="font-medium"> {{ position }} </span>
      <MarkdownHTML
        folder="home"
        :item="itemName"
      />
    </div>
  </div>
</template>

<script setup>
import Tag from '@/components/Tag.vue';
import MarkdownHTML from '@/components/MarkdownHTML.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import IconFromSvg from '../../components/IconFromSvg.vue';

const props = defineProps([
  'title',
  'tag',
  'icon',
  'iconBg',
  'from',
  'to',
  'position',
  'itemName',
  'htmlId',
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
