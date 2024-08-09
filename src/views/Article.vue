<template>
  <div class="flex-center slide-in-delay">
    <Loading v-if="!article" />
    <PageWrapper
      :title="article.title"
      :detail="article.detail"
      :disclaimer="article.disclaimer"
      to="/work"
      v-if="article"
    >
      <div class="w-full flex flex-col gap-3 mt-6">
        <span class="px-2">{{ article.text }}</span>
        <div class="flex flex-col gap-1.5 bg-module px-4 py-3 rounded-lg">
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
import Loading from '/src/components/Loading.vue';
import PageWrapper from '/src/components/PageWrapper.vue';
import { workArticleMapping } from '/src/api/data/work/list';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const route = useRoute();
const articleId = route.params.id;

const url = window.location.href;
const folder = new URL(url).searchParams.get('folder');

const article = computed(() => {
  return getArticle(folder, articleId);
});

const getArticle = function getArticleFunction(dir, id) {
  if (!dir || !id) return null;

  switch (dir) {
    case 'work':
      return workArticleMapping[id];
  }

  return undefined;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

const randomCommentedDay = ref(getRandomInt(45));
</script>
