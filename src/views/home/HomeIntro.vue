<script setup lang="ts">
import IconTwitter from '@/components/iconics/IconTwitter.vue';
import IconLinkedin from '@/components/iconics/IconLinkedin.vue';
import IconGitHub from '@/components/iconics/IconGitHub.vue';

import CopyTextButton from '@/components/CopyTextIcon.vue';
</script>

<template>
  <div class="flex flex-col page-block-raw gap-6 w-full">
    <div class="flex flex-col gap-1">
      <h1>Miguel Montesinos.</h1>
    </div>

    <h2 class="gigantic-text font-light">
      I build software that doesn't just function, it resonates, designed to
      leave an impression.
    </h2>
    <h2 class="gigantic-text font-light">
      Specialized in applications with a strong focus on quality, leaning into
      React and Vue for web and Kotlin and Swift for native.
    </h2>
    <div class="flex flex-row flex-wrap gap-3 mt-10">
      <div class="flex items-center gap-3">
        <CopyTextButton
          display-text="Copy my Email"
          copy="svnrnns@gmail.com"
        />
        <a
          class="text-btn bg-module text-heading large-text"
          href="https://seln.app/svnrnns"
        >
          My Selenial
        </a>
      </div>
      <div class="flex items-center gap-3">
        <a
          class="icon-btn bg-module"
          href="https://www.twitter.com/svnrnns"
        >
          <IconTwitter class="size-4 sm:size-4.5 fill-heading" />
        </a>
        <a
          class="icon-btn bg-module"
          href="https://www.linkedin.com/in/svnrnns/"
        >
          <IconLinkedin class="size-4 sm:size-4.5 fill-heading" />
        </a>
        <a
          class="icon-btn bg-module"
          href="https://www.github.com/svnrnns/"
        >
          <IconGitHub class="size-4 sm:size-4.5 fill-heading" />
        </a>
      </div>
    </div>
  </div>
</template>
