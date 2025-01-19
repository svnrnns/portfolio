<script setup lang="ts">
import type { Position } from '@/types/Position';
import type { IconConstructor } from '@/types/IconConstructor';
import { onBeforeUnmount, onMounted, type PropType } from 'vue';
import IconWithBackground from '@/components/IconWithBackground.vue';
import { dateToMonthYearString } from '@/fns/dates';
import MakrdownToHTML from '@/components/MakrdownToHTML.vue';
import { ref } from 'vue';

const props = defineProps({
  data: {
    type: Object as PropType<Position>,
    required: true,
  },
  iconConstructor: {
    type: Object as PropType<IconConstructor>,
    required: true,
  },
  htmlId: {
    type: String,
    required: true,
  },
});

const isTitleSticky = ref<boolean>(false);

const checkIfTitleIsSticky = (titleElement: HTMLElement | null) => {
  if (!titleElement) return;

  const rect = titleElement.getBoundingClientRect();
  if (rect.y <= 0) isTitleSticky.value = true;
  else isTitleSticky.value = false;
};

onMounted(() => {
  const titleElement = document.getElementById(props.htmlId);

  window.addEventListener('scroll', () => checkIfTitleIsSticky(titleElement));

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', () =>
      checkIfTitleIsSticky(titleElement)
    );
  });
});
</script>

<template>
  <div class="w-full flex flex-col gap-1.5">
    <div class="w-full sticky top-0">
      <div
        class="w-full px-20.5 py-4 flex items-center gap-3 bg-body"
        :id="htmlId"
      >
        <IconWithBackground
          :bg="iconConstructor.bg"
          :icon="iconConstructor.icon"
        />
        <span class="gigantic-text text-heading font-semibold">
          {{ data.title }}
        </span>
      </div>
      <div
        class="w-full absolute top-full h-60 bg-gradient-to-b from-body to-body/0 opacity-0 transition-all pointer-events-none"
        :class="{ '!opacity-100': isTitleSticky }"
      ></div>
    </div>

    <span class="font-mono tiny-text text-detail w-full page-block-raw mx-auto">
      {{ dateToMonthYearString(data.from) }} -
      <span :class="{ 'text-success font-medium': !data.to }">
        {{ data.to ? dateToMonthYearString(data.to) : 'Now' }}
      </span>
    </span>
    <div class="page-block-raw w-full mx-auto">
      <span class="font-medium">
        {{ data.position }}
      </span>
    </div>

    <MakrdownToHTML
      folder="home"
      :item="htmlId"
    />
  </div>
</template>
