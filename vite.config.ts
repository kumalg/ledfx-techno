import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using native JSX transform without Babel to avoid browserslist/caniuse-lite dependency issues
export default defineConfig({
  plugins: [react({ babel: false })],
})
