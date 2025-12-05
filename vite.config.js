import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './docs',
  base: '/',  // Change '/graphdata/' en '/'
  build: {
    outDir: resolve(__dirname, 'docs/dist'),
    emptyOutDir: true
  }
})