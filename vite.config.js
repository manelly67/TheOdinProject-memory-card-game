import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
  server: {
    headers: {
      'Cache-Control': 'max-age=604800',
    },
  },
})
