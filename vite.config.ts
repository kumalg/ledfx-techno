import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using Vite's native JSX transform (no Babel) to avoid dependency issues
export default defineConfig({
  plugins: [react()],
})
