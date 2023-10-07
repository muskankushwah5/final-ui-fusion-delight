import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    external: [
      'mock-aws-s3', // Add any other modules you want to exclude here
      'aws-sdk',
      'nock',
    ],
  },
  
})
