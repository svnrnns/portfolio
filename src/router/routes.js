import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

// Routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/experience",
    name: "Experience",
    component: () => import("../views/Experience.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// router.beforeEach(async (to, from) => {
//   let name =
//     to.name == "Landing"
//       ? "Custom Marketing Name Waiting Room"
//       : to.name.replace("Starrail", "") + " | Stellaris";
//   if (to.name == "StarrailCharacter") {
//     name = "Best build for " + characterList[0] + " | Stellaris";
//   }
//   nextTick(() => {
//     document.title = name;
//   });
// });

export default router;
