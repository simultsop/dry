import { resolve } from 'node:path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import packageJson from './package.json'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src/' }],
  },
  plugins: [dts(), vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: packageJson.name,
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
