<template>
  <div class="screen-setup overflow-hidden flex-center">
    <Loading v-if="articleLoading" />
    <PageWrapper
      :title="article.title"
      :detail="article.detail"
      to="/experience"
      :banner="'/' + article.img"
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
import Loading from "../components/Loading.vue";
import PageWrapper from "../components/PageWrapper.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { getArticle } from "/src/api/supabase-api.js";

const route = useRoute();

const articleResponse = getArticle(route.params.id);
const article = computed(() => {
  return articleResponse?.value?.response;
});
const articleLoading = computed(() => {
  return articleResponse?.value?.loading;
});
</script>
