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
      path: '/products',
      component: Products
    }
  ]
});
