import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Force the base path directly.
  base: '/fit5032-lab-efolios/',
  plugins: [vue()],
})