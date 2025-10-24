import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Hardcode the correct base path
  base: '/fit5032-lab-efolios/',
  plugins: [vue()],
})