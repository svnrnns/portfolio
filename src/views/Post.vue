<template>
  <PageWrapper to="/posts">
    <MarkdownHTML
      class="slide-in-delay md"
      style="--delay: 2"
      :folder="folder"
      :item="item"
    />
  </PageWrapper>
</template>

<script setup>
import PageWrapper from '/src/components/PageWrapper.vue';
import MarkdownHTML from '/src/components/MarkdownHTML.vue';

const getParams = function getParamsFunction() {
  const urlParams = new URLSearchParams(window.location.search);
  const folder = urlParams.get('folder');
  const item = urlParams.get('item');

  return {
    folder,
    item,
  };
};

const { folder, item } = getParams();
</script>
