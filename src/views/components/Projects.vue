<template>
  <div class="h-full w-full flex flex-col gap-3">
    <h2 class="text-[2rem] text-white border-b-2 border-detail pb-4">
      Featured projects
    </h2>
    <div class="h-full overflow-auto flex flex-col gap-3 mt-2">
      <ProjectCard v-for="el in projects" :project="el" class="module" />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "./projects/ProjectCard.vue";

const projects = [
  {
    title: "Balearia Control Tower",
    roles: ["Frontend"],
    img: "logo-balearia.svg",
    description:
      "Took part on this project while working at Zeus. Through this dashboard, many Balearia departments with significant scope in the company and various business areas and departments are monitored. This means that the control tower's function is no longer just about fleet control but extends to the entire company.",
    work: "I worked as frontend at Zeus to rebuild and improve the whole project in Balearia Control Tower v2, applying and developing new technology for the dashboard, featuring a new map for fleet control and route representation. Such a wonderful and instructive experience. ♥",
    link: "https://zeus.vision/logistica/proyecto-beyondsea-smart-visual-data/",
    time: "1 year",
  },
  {
    title: "Ucersa Dashboard",
    roles: ["Frontend"],
    img: "ucersa-logo.png",
    description: "Currently working in",
    work: "-",
    link: "about:blank",
    time: "1 month",
  },
  {
    title: "Stellaris",
    roles: ["Frontend", "Backend"],
    img: "stellaris-logo.png",
    description:
      "Stellaris is a huge dashboard-like database of Hoyoverse games data.",
    work: "I developed the entire application from the ground up: crafted the database, implemented a daily ETL process for nightly data updates, and built an effective REST API. Additionally, I handled the complete frontend programming.",
    link: "about:blank",
    time: "4 months",
  },
];
</script>
