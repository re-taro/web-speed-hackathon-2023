import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import topLevelAwait from 'vite-plugin-top-level-await';
import visualizer from 'rollup-plugin-visualizer';
import compress from 'vite-plugin-compression';

export default defineConfig(async({ mode }) => {
  return {
    build: {
      outDir: 'dist/public',
      minify: 'terser',
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 40960,
        },
      },
      target: 'chrome110',
    },
    plugins: [
      react(),
      topLevelAwait(),
      ViteEjsPlugin({
        module: '/src/client/index.tsx',
        title: '買えるオーガニック',
      }),
      mode === 'analyze' && visualizer(),
      compress({ algorithm: 'brotliCompress', ext: '.br' }),
    ],
  };
});
