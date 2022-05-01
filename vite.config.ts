import { defineConfig } from 'vite'
const path = require('path');
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.ts', '.vue'] 
  },
  plugins: [
    vue(),
  ],
  server:{
    proxy:{
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws:true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
