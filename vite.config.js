import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/DeployReact/',
    plugins: [react()],

    // REQUIRED for debugging
    build: {
        sourcemap: true
    }
})
