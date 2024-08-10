<template>
  <PageWrapper
    title="Posts"
    detail="Access public posts, including work related texts, guides, and more."
    :disclaimer="
      detail
        ? `Only showing ${filteredPosts.length} results of type ${capitalize(
            detail
          )}.`
        : null
    "
    to="/"
  >
    <List
      class="w-full mt-6 px-1.5"
      :data="orderDesc(filteredPosts)"
    >
    </List>
  </PageWrapper>
</template>

<script setup>
import List from '/src/components/List.vue';
import PageWrapper from '/src/components/PageWrapper.vue';
import posts from '/src/api/posts.js';
import { computed } from 'vue';

const orderDesc = function orderByDateDescending(arr) {
  return arr.sort((a, b) => {
    const [monthA, yearA] = a.date.split('/').map(Number);
    const [monthB, yearB] = b.date.split('/').map(Number);

    if (yearA !== yearB) {
      // Compare by year first
      return yearB - yearA;
    } else {
      // If years are equal, compare by month
      return monthB - monthA;
    }
  });
};

const getDetail = function getDetailParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('detail');
};

const detail = getDetail();

const filteredPosts = computed(() => {
  if (detail === null) return posts;
  else {
  }
  return posts.filter((el) => el.detail.toLowerCase() === detail.toLowerCase());
});

const capitalize = function capitalizeFunction(str) {
  if (typeof str !== 'string' || str.length === 0) {
    // Return the original string if it's not a valid input or it's empty
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
</script>
