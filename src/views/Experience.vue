<template>
  <div class="screen-setup overflow-hidden items-center">
    <PageWrapper
      :title="'Enterprise Experience'"
      :detail="'List of most relevant projects I have been part of.'"
      :to="'/'"
    >
      <div class="w-full flex flex-col divide-y divide-font/30 mt-6 px-1.5">
        <router-link
          :to="'/article/' + project.article"
          class="flex items-center justify-between py-3 cursor-pointer"
          v-for="project in projects"
        >
          <div class="flex items-center gap-3">
            <span class="text-heading hover:underline">{{ project.name }}</span>
            <span class="text-sm">{{ project.company }}</span>
          </div>
          <span class="text-sm">{{ project.year }}</span>
        </router-link>
      </div>
    </PageWrapper>
  </div>
</template>

<script setup>
import PageWrapper from "../components/PageWrapper.vue";
import projects from "/src/api/projects.js";
</script>
