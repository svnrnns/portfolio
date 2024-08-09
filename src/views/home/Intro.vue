<template>
  <section
    class="flex flex-col gap-3 slide-in-delay"
    style="--delay: 3"
  >
    <span>
      I’m a Software Engineer with a passion for building high-quality,
      multi-platform full-stack applications. <br />
      My goal is to deliver exceptional products with the best user experience
      in mind.
    </span>
    <span>
      I specialize in building
      <router-link
        to="/saas"
        class="clickable underline"
        >saas</router-link
      >
      applications, usually having to pick between my two faves:
      <TechBadge tech="react" />
      and
      <TechBadge tech="vue" />
      . But no matter what,
      <TechBadge tech="supabase" />
      is always my go-to for the backend.
    </span>
  </section>
</template>

<script setup>
import TechBadge from '/src/components/TechBadge.vue';
</script>
