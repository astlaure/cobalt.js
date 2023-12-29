import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dtsPlugin from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      dtsPlugin({ include: ['src/lib'] }),
  ],
  build: {
    lib: {
      entry: 'src/lib/main.ts',
      formats: ['es'],
      fileName: 'main',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
