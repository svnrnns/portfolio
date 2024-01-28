<template>
  <article class="w-full flex flex-col items-start gap-3">
    <img :src="pfp" class="h-32 rounded-[200px]" />
    <h1 class="text-white text-2xl leading-none">seven rings</h1>
    <span class="text-detail leading-none">@svnrnns</span>

    <div class="flex gap-2 flex-wrap">
      <Tag v-for="el in tags" :name="el"></Tag>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <h2 class="text-white text-xl leading-none">About</h2>
      <p class="text-font">{{ about }}</p>
    </div>
    <div class="flex gap-4">
      <a href="https://github.com/svnrnns" target="_blank">
        <Github class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/svnrnns/" target="_blank">
        <Linkedin class="icon hover:!fill-blue-500" />
      </a>
      <Popper
        content="haruueel@gmail.com"
        hover="true"
        arrow="true"
        placement="top"
      >
        <Mail class="icon hover:!fill-red-400" />
      </Popper>
    </div>

    <footer class="flex justify-between w-full mt-2">
      <div class="flex gap-2 items-center">
        <Experience class="fill-detail w-3" />
        <span class="leading-none font-poppins text-sm">1 year experience</span>
      </div>
      <div class="flex gap-2 items-center">
        <Projects class="fill-detail w-5" />
        <span class="leading-none font-poppins text-sm">+7 projects</span>
      </div>
    </footer>
  </article>
</template>

<script setup>
import Github from "/src/components/icons/Github.vue";
import Linkedin from "/src/components/icons/Linkedin.vue";
import Mail from "/src/components/icons/Mail.vue";
import Tag from "/src/components/Tag.vue";
import Experience from "/src/components/icons/Experience.vue";
import Projects from "/src/components/icons/Projects.vue";
import Popper from "vue3-popper";

const tags = [
  "Frontend",
  "Backend",
  "Multiplatform dev",
  "Data analyst",
  "Designer",
  "DevOps",
];
const about =
  "I am an appliaction multiplatform fullstack developer driven by an unwavering ambition of becoming an excellent programmer.";
const pfp =
  "https://cdn.discordapp.com/attachments/324927709233020929/1197472923338936370/haruchan.jpg?ex=65bb6490&is=65a8ef90&hm=1958243094e1b6161100b9980447a03f8568e3ac93503be0aac71525c09e3d8a&";
</script>
