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
  plugins: [
    vue(),
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.build.json',
      include: ['src/**/*.ts', 'src/**/*.vue'],
      rollupTypes: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: packageJson.name,
      fileName: () => 'lib.js',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      external: (id: string) => {
        return id === 'vue' || id.startsWith('vue/')
      }
    }
  }
})
