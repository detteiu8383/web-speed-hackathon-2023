import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

export default defineConfig(async ({ mode }) => {
  return {
    build: {
      assetsInlineLimit: 20480,
      cssCodeSplit: false,
      minify: true,
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 40960,
        },
        plugins: [
          mode === 'analyze' &&
            visualizer({
              brotliSize: true,
              filename: 'dist/stats.html',
              gzipSize: true,
              open: true,
            }),
        ],
      },
      target: 'chrome110',
    },
    plugins: [react(), wasm(), topLevelAwait()],
  };
});
