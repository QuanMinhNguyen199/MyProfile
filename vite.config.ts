import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths support both custom domains and /repository/ GitHub Pages URLs.
  base: './',
  plugins: [react(), tailwindcss()],
})
