import { defineConfig } from 'vite'

export default defineConfig({
  root: './docs',
  base: '/graphdata/',
  ////publicDir: '../public', // Pointe vers le dossier public à la racine
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})