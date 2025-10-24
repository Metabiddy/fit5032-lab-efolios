import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Use 'base' instead of 'publicPath'
  base: process.env.NODE_ENV === 'production'
    ? '/fit5032-lab-efolios/'  // Your repo name
    : '/',
  plugins: [vue()],
})