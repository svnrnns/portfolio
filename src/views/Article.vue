<template>
  <div class="flex-center">
    <Loading v-if="articleLoading" />
    <PageWrapper
      :title="article.title"
      :detail="article.detail"
      :disclaimer="article.disclaimer"
      to="/work"
      v-if="article"
    >
      <div class="w-full flex flex-col gap-3 mt-6">
        <span class="px-2 slide-in-delay">{{ article.text }}</span>
        <div
          class="slide-in-delay flex flex-col gap-1.5 shadow-lg bg-module px-4 py-3 rounded-lg"
          style="--delay: 2"
        >
          <div class="flex items-center gap-1.5 text-sm sm:text-base">
            <img
              src="/svnrnns.png"
              class="h-6 w-6 rounded-full"
            />
            <span>
              <a
                href="https://twitter.com/svnrnns"
                target="_blank"
                class="text-heading hover:underline"
              >
                @svnrnns
              </a>
              commented {{ randomCommentedDay }} days ago.</span
            >
          </div>
          <span class="text-heading pl-1.5">{{ article.comment }}</span>
        </div>
      </div>
    </PageWrapper>
  </div>
</template>

<script setup>
import Loading from '../components/Loading.vue';
import PageWrapper from '../components/PageWrapper.vue';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { getArticle } from '/src/api/supabase-api.js';

const zeusDisclaimer =
  'This article does not contain any image in accordance with Zeus privacy policies';

const route = useRoute();

const articleResponse = getArticle(route.params.id);
const article = computed(() => {
  return articleResponse?.value?.response;
});
const articleLoading = computed(() => {
  return articleResponse?.value?.loading;
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

const randomCommentedDay = ref(getRandomInt(45));
</script>
