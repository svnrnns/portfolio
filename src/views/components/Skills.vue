<template>
  <section class="h-full w-full flex flex-col gap-3">
    <h2 class="text-xl text-white">My Skills</h2>
    <div class="flex flex-col gap-3 overflow-auto">
      <Skill
        v-for="skill in sortedSkillList"
        :name="skill.name"
        :rating="skill.rate"
      />
    </div>
  </section>
</template>

<script setup>
import Skill from "./skills/Skill.vue";
const compareByRate = (a, b) => b.rate - a.rate;
const skillList = [
  {
    name: "Laravel",
    rate: 80,
  },
  {
    name: "Kotlin",
    rate: 80,
  },
  {
    name: "Database design",
    rate: 100,
  },
  {
    name: "API design",
    rate: 100,
  },
  {
    name: "Python",
    rate: 50,
  },
  {
    name: "Vue",
    rate: 95,
  },
  {
    name: "Tailwindcss",
    rate: 95,
  },
  {
    name: "Java",
    rate: 70,
  },
  {
    name: "UI/UX design",
    rate: 45,
  },
  {
    name: "Photoshop",
    rate: 30,
  },
];
const sortedSkillList = skillList.sort(compareByRate);
</script>
