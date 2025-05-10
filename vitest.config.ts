import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'
import packageJson from './package.json'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.vue'],
    }),
  ],
  test: {
    globals: true,
    root: './src',
    include: ['**/*.spec.ts'],
    exclude: ['node_modules', 'dist'],
    environment: 'jsdom',
  },
  resolve: {
    extensions: ['js', 'json', 'ts'],
    alias: {
      // Ensure Vitest correctly resolves TypeScript path aliases
      'src': resolve(__dirname, './src'),
    },
  },
});
