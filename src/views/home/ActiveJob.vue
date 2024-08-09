<template>
  <div
    class="flex flex-col gap-3 w-full slide-in-delay"
    style="--delay: 5"
  >
    <article class="flex flex-col gap-1.5 w-full">
      <a
        class="flex items-center gap-3 transition-all hover:translate-x-2 cursor-pointer"
        href="https://zeus.vision"
        target="_blank"
      >
        <h2 class="text-xl font-medium text-heading">Zeus by Llyc</h2>
        <ArrowUpLeftIcon class="h-4 rotate-90 fill-font mr-auto" />
      </a>
      <p class="text-detail">Senior Frontend Developer, May 2023 - Now</p>

      <ul class="w-full flex flex-col gap-3 mt-3">
        <li>
          Developed the frontend for over 10 projects for major Spanish
          companies like Balearia, Telefonica, and many more, using Vue and
          TailwindCSS technologies, increasing the profitability of these
          projects by over 50% through their early and successful completion,
          meeting all quality standards (QA).
        </li>
        <li>
          Led projects, both on the backend and frontend, increasing team
          productivity by 20-30% through efficient resource, team, and time
          management.
        </li>
        <li>
          Designed internal technology that simplified project development,
          enhancing overall efficiency and quality of work within the company.
        </li>
        <li class="text-sm text-detail">
          See all my articles from Zeus talking about my job
          <router-link
            to="/articles"
            class="clickable underline !text-font"
          >
            here</router-link
          >.
        </li>
      </ul>
    </article>
  </div>
</template>

<script setup>
import ArrowUpLeftIcon from '/src/components/iconics/ArrowUpLeftIcon.vue';
</script>

<style scoped>
li {
  @apply ml-6 relative pl-6;
}

li::marker {
  @apply text-detail;
  content: '•';
}
</style>
