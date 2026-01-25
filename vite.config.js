import { defineConfig } from "vite";

export default defineConfig({
  base: '/portfolio/',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    open:true,
  },
})