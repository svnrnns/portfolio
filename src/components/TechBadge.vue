<template>
  <div
    class="tooltip p-1.5 bg-module shadow rounded-md hover:-translate-y-1 transition-all duration-300"
    :data-tooltip="capitalize(tech)"
  >
    <component
      :is="getIcon()"
      class="size-5"
    />
  </div>
</template>

<script setup>
import ReactIcon from './iconics/ReactIcon.vue';
import VueIcon from './iconics/VueIcon.vue';
import SupabaseIcon from './iconics/SupabaseIcon.vue';
import KotlinIcon from './iconics/KotlinIcon.vue';
import SwiftIcon from './iconics/SwiftIcon.vue';
import TypescriptIcon from './iconics/TypescriptIcon.vue';

const props = defineProps(['tech']);
const icon = props.tech;

const getIcon = () => {
  switch (icon) {
    case 'react':
      return ReactIcon;
    case 'vue':
      return VueIcon;
    case 'supabase':
      return SupabaseIcon;
    case 'kotlin':
      return KotlinIcon;
    case 'swift':
      return SwiftIcon;
    case 'typescript':
      return TypescriptIcon;
    default:
      break;
  }
};

const capitalize = (str) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};
</script>
