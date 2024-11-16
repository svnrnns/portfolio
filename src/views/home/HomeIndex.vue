<template>
  <div class="flex flex-col w-full gap-16">
    <div class="flex flex-col gap-4">
      <span class="tiny-text text-detail mb-4">Work</span>
      <EnhancedAnchor
        text="Zeus by Llyc"
        href="#zeus"
      />
    </div>
    <div class="flex flex-col gap-4">
      <span class="tiny-text text-detail mb-4">Techstack</span>
      <div class="grid grid-cols-5 gap-3 w-fit">
        <TechBadge tech="vue" />
        <TechBadge tech="react" />
        <TechBadge tech="typescript" />
        <TechBadge tech="kotlin" />
        <TechBadge tech="swift" />
        <TechBadge tech="supabase" />
        <TechBadge tech="laravel" />
      </div>
    </div>
  </div>
</template>

<script setup>
import EnhancedAnchor from '@/components/EnhancedAnchor.vue';
import TechBadge from '@/components/TechBadge.vue';
</script>
