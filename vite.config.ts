import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [react(), vike()],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})

