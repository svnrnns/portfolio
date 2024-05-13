<template>
  <div class="screen-setup overflow-hidden flex flex-col items-center">
    <PageWrapper
      :title="'Enterprise Experience'"
      :text="'List of most relevant projects I have been part of.'"
    >
      <div class="w-full flex flex-col divide-y divide-font/30 mt-6 px-1.5">
        <div
          class="flex items-center justify-between py-3 cursor-pointer"
          v-for="project in projects"
        >
          <div class="flex items-center gap-3">
            <span class="text-heading hover:underline">{{ project.name }}</span>
            <span class="text-sm">{{ project.company }}</span>
          </div>
          <span class="text-sm">{{ project.year }}</span>
        </div>
      </div>
    </PageWrapper>
    <!-- <router-link
        to="/"
        class="flex items-center justify-start gap-1.5 mt-6 transition hover:underline cursor-pointer"
      >
        <ArrowUpRightIcon class="h-3 fill-heading" />
        <span class="text-heading text-sm">Back</span>
      </router-link> -->
  </div>
</template>

<script setup>
import PageWrapper from "../components/iconics/PageWrapper.vue";
import ArrowUpRightIcon from "/src/components/iconics/ArrowUpLeftIcon.vue";
import projects from "/src/api/projects.js";
</script>
