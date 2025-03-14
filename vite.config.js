import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/board-game-administration/', // Replace 'your-repo-name' with the actual name of your GitHub repository
})
