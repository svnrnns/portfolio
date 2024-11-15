<template>
  <div class="flex flex-col gap-3 w-full">
    <div class="flex flex-col gap-1 mb-3">
      <h1>
        Hey, I'm Miguel.
        <span class="smol-text text-detail font-normal">(seven rings) </span>
      </h1>
    </div>

    <h2 class="massive-text font-light">
      I build software that doesn't just function, it resonates, designed to
      leave an impression.
    </h2>
    <h2 class="massive-text font-light">
      I create applications with a strong focus on quality, leaning into React
      and Vue for web and Kotlin and Swift for native.
    </h2>
    <div class="flex items-center gap-3 mt-3 relative">
      <TechBadge tech="vue" />
      <TechBadge tech="react" />
      <TechBadge tech="typescript" />
      <TechBadge tech="kotlin" />
      <TechBadge tech="swift" />
    </div>
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
        <a class="sub-btn-icon">
          <LinkedinInIcon
            class="size-4 fill-heading"
            href="https://www.linkedin.com/in/svnrnns/"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import TechBadge from '/src/components/TechBadge.vue';
import TwitterIcon from '/src/components/iconics/TwitterIcon.vue';
import LinkedinInIcon from '/src/components/iconics/LinkedinInIcon.vue';
import CopyTextButton from '/src/components/CopyTextButton.vue';
</script>
