import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // needed for docker
    port: 5173, // this is the default port
    strictPort: true,
    watch: {
      usePolling: true
    },
    hmr: {
      overlay: false
    }
  }
})