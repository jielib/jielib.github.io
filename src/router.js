import { createRouter, createWebHistory } from 'vue-router';

// Pages
import Welcome from './Pages/Welcome.page.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Welcome
    }
  ]
});
