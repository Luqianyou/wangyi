import { defineConfig } from 'vite'
const path = require('path');
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  resolve: {
    // 配置路径别名
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
        target: 'http://www.codeman.ink:3000',
        changeOrigin: true,
        ws:true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
