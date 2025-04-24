import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { builtinModules } from 'module';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: (id) => {
        return [
          ...builtinModules,
          'fsevents'
        ].some((mod) => id === mod || id.startsWith(`${mod}/`));
      }
    }
  }
});