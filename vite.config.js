import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    includedRoutes(paths, routes) {
      // exclude all the route paths that contains 'foo'
      return paths.flatMap((r) => [r, `${r}/`]);
    }
  }
});
