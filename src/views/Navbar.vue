<template>
  <aside class="w-full slide-in-delay flex items-center justify-between">
    <nav class="flex items-center gap-3">
      <router-link
        to="/"
        class="clickable"
      >
        home
      </router-link>
      <a
        href="https://read.cv/svnrnns"
        target="_blank"
        class="clickable"
      >
        cv
      </a>
      <router-link
        to="/blog"
        class="clickable"
      >
        blog
      </router-link>
      <a class="clickable">saas</a>
      <router-link
        to="/docs"
        class="clickable"
      >
        docs
      </router-link>
    </nav>
    <ThemeSwitcher />
  </aside>
</template>

<script setup>
import ThemeSwitcher from '/src/components/ThemeSwitcher.vue';
</script>
