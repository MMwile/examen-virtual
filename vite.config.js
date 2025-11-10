import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Cambia la base al nombre de tu repositorio o subcarpeta correcta
export default defineConfig({
  plugins: [react()],
  base: '/InteractiveTests/examen-virtual/', 
})
