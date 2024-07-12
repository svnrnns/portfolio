<template>
  <div class="screen-setup overflow-hidden items-center">
    <PageWrapper
      title="Documents"
      detail="Easy access to public docs."
      to="/"
    >
      <List
        class="w-full mt-6 px-1.5"
        to="/doc/"
        param="doc"
        name="name"
        detail="detail"
        date="date"
        :data="docs"
      >
      </List>
    </PageWrapper>
  </div>
</template>

<script setup>
import List from '/src/components/List.vue';
import PageWrapper from '/src/components/PageWrapper.vue';
import docs from '/src/api/data/docs.js';
</script>
