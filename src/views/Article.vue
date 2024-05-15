<template>
  <div class="screen-setup overflow-hidden flex-center">
    <span v-if="articleLoading">Loading...</span>
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
import PageWrapper from "../components/PageWrapper.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { supabase } from "/src/api/supabase-client.js";

const article = ref(null);
const articleLoading = ref(true);
const route = useRoute();

async function getArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("code", route.params.id);
  if (error) {
    // Add error handling (in the future)
  } else {
    article.value = data[0];
    articleLoading.value = false;
  }
}

onMounted(() => {
  getArticles();
});
</script>
