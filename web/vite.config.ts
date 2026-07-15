import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const here = resolve(fileURLToPath(new URL('.', import.meta.url)));

export default defineConfig({
  root: here,
  publicDir: resolve(here, 'public'),
  plugins: [react()],
  build: {
    outDir: resolve(here, '../internal/site/dist'),
    emptyOutDir: false,
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        public: resolve(here, 'src/public.ts'),
        admin: resolve(here, 'src/admin.tsx')
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'assets/style.css' : 'assets/[name][extname]'
      }
    }
  }
});
