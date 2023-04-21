import App from './App.vue';

import router from './router';
import { ViteSSG } from 'vite-ssg';

export const createApp = ViteSSG(
  App,
  { routes: router },
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  }
);
