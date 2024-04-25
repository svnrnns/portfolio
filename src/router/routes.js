import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

// Routes
const routes = [
  {
    path: "/",
    name: "Root",
    component: () => import("../views/Portfolio.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(async (to, from) => {
  let name =
    to.name == "Landing"
      ? "Custom Marketing Name Waiting Room"
      : to.name.replace("Starrail", "") + " | Stellaris";
  if (to.name == "StarrailCharacter") {
    name = "Best build for " + characterList[0] + " | Stellaris";
  }
  nextTick(() => {
    document.title = name;
  });
});

export default router;
