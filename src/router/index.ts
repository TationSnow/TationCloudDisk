import { createRouter, createWebHistory } from 'vue-router';
import { sitePages } from '@/data/site';
import RoutePage from '@/views/RoutePage.vue';

const routes = [
  ...sitePages.map((page) => ({
    path: page.path,
    name: page.id,
    component: RoutePage,
    meta: {
      pageId: page.id,
      layout: page.layout,
    },
  })),
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
