import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [
        'fsevents',
        'node:fsevents',
        'fs',
        'node:fs',
        'fs/promises',
        'node:fs/promises',
        'path',
        'node:path',
        'url',
        'node:url',
        'util',
        'node:util',
        'perf_hooks',
        'node:perf_hooks',
        'module',
        'node:module',
        'crypto',
        'node:crypto'
      ]
    }
  }
});