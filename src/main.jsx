import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { builtinModules } from 'module';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [
        ...builtinModules.filter(m => !/^_|^internal/.test(m)),
        'fsevents' // optional dep, safely ignored by Vercel
      ]
    }
  }
});