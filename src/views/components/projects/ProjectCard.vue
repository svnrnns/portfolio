<template>
  <article class="w-full bg-white flex gap-3">
    <div class="box !p-4 w-28 h-28 items-center justify-center flex">
      <img :src="'/src/assets/' + project.img" />
    </div>
    <div class="w-full h-full flex flex-col justify-between gap-3">
      <div class="w-full flex gap-3 items-center">
        <h3 class="text-xl text-white">{{ project.title }}</h3>
        <Tag v-for="role in project.roles" :name="role" />
      </div>
      <p class="text-font">{{ project.description }}</p>
      <div class="flex flex-col post gap-1">
        <span class="text-white">@svnrnns</span>
        <p class="text-font font-poppins text-sm">{{ project.work }}</p>
      </div>
      <footer class="w-full flex gap-3 items-center">
        <a
          :href="project.link"
          target="_blank"
          class="text-detail leading-none font-poppins text-sm"
          >Read more!</a
        >
        <div class="flex gap-2 items-center">
          <Time class="w-4 fill-detail" />
          <span class="text-detail leading-none font-poppins text-sm">{{
            project.time
          }}</span>
        </div>
      </footer>
    </div>
  </article>
</template>

<script setup>
import Tag from "/src/components/Tag.vue";
import Time from "/src/components/icons/Time.vue";
const props = defineProps({
  project: Object,
});
</script>
