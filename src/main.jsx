import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { builtinModules } from 'module';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [
        'fsevents',
        'module',
        'node:fs',
        'node:fs/promises',
        'node:path',
        'node:url',
        'node:util',
        'node:perf_hooks',
        'node:module',
        'node:crypto',
        'tty',
        'path',
        'fs',
        'events',
        'assert',
        'util',
        'net',
        'url',
        'http',
        'stream',
        'os',
        'child_process',
        'node:os',
        'node:child_process',
        'node:dns',
        'crypto',
        'node:buffer',
        'node:assert',
        'node:process',
        'node:v8',
        'worker_threads',
        'node:http',
        'node:https',
        'https',
        'tls',
        'node:net',
        'querystring',
        'node:readline',
        'node:zlib',
        'zlib',
        'buffer',
        'node:http2'
      ]
    }
  }
});