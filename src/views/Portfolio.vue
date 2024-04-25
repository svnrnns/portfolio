<template>
  <div
    class="h-screen w-screen flex flex-col-reverse lg:flex-row bg-body relative"
  >
    <div
      class="fixed z-50 h-full w-full bg-black/30 backdrop-blur flex-center p-[8%] pointer-events-none opacity-0 transition-all duration-500"
      :class="{
        '!opacity-100 !pointer-events-auto': showMobileModal,
      }"
    >
      <StaticArticle
        :data="hoveringProjectArticle"
        @close="showMobileModal = false"
      />
    </div>
    <div
      class="fixed h-full w-full rainbow-background z-0 transition-all duration-300"
      :class="{
        'opacity-0': hovering != null,
      }"
    ></div>
    <aside
      class="h-1/2 lg:h-full w-full lg:w-2/5 flex flex-col items-center lg:justify-center gap-4 px-[5%] lg:px-0 z-10"
    >
      <ProjectCard
        v-for="project in projectsId"
        :name="project.name"
        :icon="project.icon"
        @mouseenter="(hovering = true), (hoveringId = project.id)"
        @mouseleave="hovering = null"
        @click="handleClick(project.id)"
        class="w-full lg:w-72"
      />
    </aside>
    <main
      class="flex-1 lg:h-full lg:flex-1 flex items-center px-[5%] lg:px-0 z-10 relative"
    >
      <RainbowText
        class="opacity-100 transition-all duration-300"
        :class="{
          '!opacity-0': hovering != null && windowWidth >= 1024,
        }"
      />
      <FloatingArticle
        :data="hoveringProjectArticle"
        class="absolute opacity-0 transition-all duration-300 pointer-events-none"
        :class="{
          '!opacity-100': hovering != null && windowWidth >= 1024,
        }"
        :hovering="hovering != null && windowWidth >= 1024"
      />
    </main>
  </div>
</template>

<script setup>
import RainbowText from "./components/RainbowText.vue";
import ProjectCard from "./components/ProjectCard.vue";
import projects from "/src/api/projects.js";
import FloatingArticle from "./components/FloatingArticle.vue";
import StaticArticle from "./components/StaticArticle.vue";

import { eventEmit } from "/src/plugins/events.js";
import { ref, computed, onMounted, onUnmounted } from "vue";

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

const hovering = ref(null);
const hoveringId = ref(0);
const showMobileModal = ref(false);

function handleClick(id) {
  if (windowWidth.value < 1024) {
    hoveringId.value = id;
    showMobileModal.value = true;
  }
}

const projectsId = computed(() => {
  return projects.map((element, index) => {
    return {
      id: index,
      ...element,
    };
  });
});

const hoveringProjectArticle = computed(() => {
  if (hoveringId.value != null) {
    return projects[hoveringId.value].article;
  }
  return null;
});
</script>

<style scoped>
@keyframes rainbow {
  0% {
    background-color: #fffbfc;
  }
  25% {
    background-color: #fef7ff;
  }
  50% {
    background-color: #f7f7ff;
  }
  75% {
    background-color: #f3faf2;
  }
  100% {
    background-color: #fffbfc;
  }
}
.rainbow-background {
  animation: rainbow 10s infinite;
}
</style>
