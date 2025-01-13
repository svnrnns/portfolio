import { createRouter, createWebHistory } from 'vue-router';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { nextTick } from 'vue';

// Routes
const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404View.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(
  async (
    to: RouteLocationNormalized
    // from: RouteLocationNormalized,
    // next: NavigationGuardNext
  ) => {
    const value = to.name?.toString().toLocaleLowerCase() || 'unknown';
    const name = `seven rings • ${value}`;
    nextTick(() => {
      document.title = name;
    });
  }
);

export default router;
