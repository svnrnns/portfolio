<template>
  <div
    class="tooltip hover:-translate-y-1 transition-all duration-300 w-fit shadow p-1.5 rounded-lg bg-module"
    :data-tooltip="capitalize(tech)"
  >
    <div class="overflow-hidden rounded">
      <component
        :is="getIcon()"
        class="size-5"
      />
    </div>
  </div>
</template>

<script setup>
import ReactIcon from './iconics/ReactIcon.vue';
import VueIcon from './iconics/VueIcon.vue';
import SupabaseIcon from './iconics/SupabaseIcon.vue';
import KotlinIcon from './iconics/KotlinIcon.vue';
import SwiftIcon from './iconics/SwiftIcon.vue';
import TypescriptIcon from './iconics/TypescriptIcon.vue';
import LaravelIcon from './iconics/LaravelIcon.vue';

const props = defineProps(['tech']);
const icon = props.tech;

const iconMap = {
  react: ReactIcon,
  vue: VueIcon,
  supabase: SupabaseIcon,
  kotlin: KotlinIcon,
  swift: SwiftIcon,
  typescript: TypescriptIcon,
  laravel: LaravelIcon,
};

const getIcon = () => iconMap[icon] || undefined;

const capitalize = (str) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};
</script>
