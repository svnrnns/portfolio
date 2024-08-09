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
      I specialize in building SaaS applications, often having to choose between
      my two sweeties:
      <TechBadge tech="react" />
      and
      <TechBadge tech="vue" />
      . However, I always power them with
      <TechBadge tech="supabase" />
      .
    </span>
  </section>
</template>

<script setup>
import TechBadge from '/src/components/TechBadge.vue';
</script>
