import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/bot-api': {
        target: 'https://botserver.cookiebotfur.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bot-api/, '')
      }
    }
  }
});
