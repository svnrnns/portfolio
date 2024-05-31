<template>
  <div class="flex flex-col gap-6">
    <span class="text-lg font-medium text-heading slide-in-delay"
      >seven rings <span class="text-detail/30 font-normal">.com</span>
    </span>
    <span class="-mt-3 text-detail slide-in-delay" style="--delay: 2"
      >Miguel Montesinos</span
    >
    <span class="slide-in-delay" style="--delay: 3">
      Software Engineer specializing in the development of multi-platform
      full-stack applications. <br />
      Delivering god-tier products with the best user experience in mind.</span
    >
    <ul class="flex items-center gap-3 slide-in-delay" style="--delay: 4">
      <li>
        <a href="https://read.cv/svnrnns" target="_blank">CV</a>
      </li>
      <li>
        <router-link to="/experience">Experience</router-link>
      </li>
      <li>
        <a>Side-Projects</a>
      </li>
      <li>
        <router-link to="/docs">Docs</router-link>
      </li>
    </ul>
    <div
      class="w-full h-px bg-detail/30 slide-in-delay my-6"
      style="--delay: 5"
    ></div>
  </div>
</template>

<style scoped>
a {
  @apply text-heading hover:underline cursor-pointer;
}
</style>
