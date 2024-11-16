import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue';

// Routes
const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(async (to, from) => {
  const name = 'seven rings • ' + to.name.toLocaleLowerCase();
  nextTick(() => {
    document.title = name;
  });
});

export default router;
