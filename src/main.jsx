import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [
        'fsevents',
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
        'node:crypto',
        'tty',
        'events',
        'assert',
        'net',
        'http',
        'https',
        'os',
        'child_process',
        'zlib',
        'buffer',
        'stream',
        'querystring',
        'worker_threads',
        'node:os',
        'node:child_process',
        'node:dns',
        'node:buffer',
        'node:assert',
        'node:process',
        'node:v8',
        'node:http',
        'node:https',
        'node:http2',
        'node:zlib',
        'node:readline'
      ]
    }
  }
});