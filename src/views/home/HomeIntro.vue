<template>
  <div class="flex flex-col gap-6 w-full">
    <div class="flex flex-col gap-1">
      <h1>Miguel.</h1>
    </div>
    <span class="smol-text text-detail font-normal italic">noun</span>

    <h2 class="massive-text font-light">
      A developer who builds software that doesn't just function, it resonates,
      designed to leave an impression.
    </h2>
    <h2 class="massive-text font-light">
      Specializes in applications with a strong focus on quality, leaning into
      React and Vue for web and Kotlin and Swift for native.
    </h2>
    <div class="flex flex-col md:flex-row md:items-center gap-3 mt-10">
      <div class="flex items-center gap-3">
        <CopyTextButton
          display-text="Copy my Email"
          copy="svnrnns@gmail.com"
        />
        <a
          class="sub-btn medium-text"
          href="https://seln.app/svnrnns"
        >
          My Selenial
        </a>
      </div>
      <div class="flex items-center gap-3">
        <a
          class="sub-btn-icon"
          href="https://www.twitter.com/svnrnns"
        >
          <TwitterIcon class="size-4 fill-heading" />
        </a>
        <a
          class="sub-btn-icon"
          href="https://www.linkedin.com/in/svnrnns/"
        >
          <LinkedinInIcon class="size-4 fill-heading" />
        </a>
        <a
          class="sub-btn-icon"
          href="https://www.github.com/svnrnns/"
        >
          <GitHubIcon class="size-4 fill-heading" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import TwitterIcon from '@/components/iconics/TwitterIcon.vue';
import LinkedinInIcon from '@/components/iconics/LinkedinInIcon.vue';
import GitHubIcon from '@/components/iconics/GitHubIcon.vue';

import CopyTextButton from '@/components/CopyTextButton.vue';
</script>
