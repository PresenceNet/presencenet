import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { builtinModules } from 'module';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: (id) =>
        id.startsWith('node:') || [
          'fs', 'path', 'os', 'crypto', 'assert', 'buffer', 'zlib', 'tls',
          'http', 'https', 'net', 'stream', 'url', 'util', 'events', 'child_process',
          'worker_threads', 'querystring', 'tty', 'fsevents'
        ].some(name => id === name || id.startsWith(`${name}/`))
    }
  }
});