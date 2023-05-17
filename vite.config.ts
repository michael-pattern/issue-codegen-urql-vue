import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/client.ts')
      ],
      formats: ['es'],
      fileName: (moduleFormat, entryName) => `${entryName}.${moduleFormat}.js`
    },
    rollupOptions: {
      external: ['@urql/vue']
    }
  },
  clearScreen: false
})
