import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/'  // This ensures GitHub Pages serves files correctly
})
export default {
  base: '/portfolio/'
}
