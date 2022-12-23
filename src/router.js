import { createRouter, createWebHistory } from 'vue-router';

// Pages
import Welcome from './Pages/Welcome.page.vue';
import Products from './Pages/Products.page.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      name: 'products',
      path: '/products',
      component: Products
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }

    return { top: 0 };
  }
});
