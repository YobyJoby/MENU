import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    rollupOptions: {
      input: './src/index.js',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
