import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
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
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet'],
            apollo: ['@apollo/client', 'graphql'],
            formik: ['formik'],
            zod: ['zod'],
            temporal: ['@js-temporal/polyfill'],
          },
        },
      },
      target: 'chrome110',
    },
    plugins: [
      react(),
      splitVendorChunkPlugin(),
      topLevelAwait(),
      ViteEjsPlugin({
        module: '/src/client/index.tsx',
        title: '買えるオーガニック',
      }),
      mode === 'analyze' && visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
      compress({ algorithm: 'brotliCompress', ext: '.br' }),
    ],
  };
});
