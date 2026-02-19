import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {},
        plugins: [],
        babelrc: false,
        configFile: false,
      },
    } as any),
  ],
})
