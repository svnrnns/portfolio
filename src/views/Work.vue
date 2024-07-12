<template>
  <PageWrapper
    title="Enterprise Work"
    detail="List of most relevant projects I have been part of."
    to="/"
  >
    <List
      class="w-full mt-6 px-1.5"
      to="/article/"
      param="article"
      name="name"
      detail="company"
      date="year"
      :data="projects"
    >
    </List>
  </PageWrapper>
</template>

<script setup>
import List from '/src/components/List.vue';
import PageWrapper from '/src/components/PageWrapper.vue';
import projects from '/src/api/data/projects.js';
</script>
