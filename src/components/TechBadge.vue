<template>
  <div
    class="p-1 text-sm rounded bg-module inline-flex ring-1 ring-border items-center"
  >
    <component
      :is="getIcon()"
      class="w-3.5 h-3.5 mr-1.5"
    />
    <span class="capitalize font-medium leading-4 text-heading">
      {{ tech }}
    </span>
  </div>
</template>

<script setup>
import ReactIcon from './iconics/ReactIcon.vue';
import VueIcon from './iconics/VueIcon.vue';
import SupabaseIcon from './iconics/SupabaseIcon.vue';

const props = defineProps(['tech']);
const icon = props.tech;

const getIcon = function getIconFunction() {
  switch (icon) {
    case 'react':
      return ReactIcon;
    case 'vue':
      return VueIcon;
    case 'supabase':
      return SupabaseIcon;
    default:
      break;
  }
};
</script>
