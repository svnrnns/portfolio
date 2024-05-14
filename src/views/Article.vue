<template>
  <div class="screen-setup overflow-hidden flex-center">
    <PageWrapper
      :title="article.title"
      :detail="article.detail"
      to="/experience"
      :banner="article.img"
      v-if="article"
    >
      <div class="w-full flex flex-col gap-3 mt-6">
        <span class="px-2">{{ article.text }}</span>
        <span
          class="shadow-lg border bg-module px-3 py-2 rounded-lg border-border text-heading"
          >{{ article.comment }}</span
        >
      </div>
    </PageWrapper>
  </div>
</template>

<script setup>
import PageWrapper from "../components/PageWrapper.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const route = useRoute();
const article = ref(null);

import("../api/articles/" + route.params.id + ".js")
  .then((module) => {
    article.value = module.default;
    document.title = "seven rings - " + module.default.title;
  })
  .catch((err) => {
    console.error("Error loading module:", err);
  });
</script>
