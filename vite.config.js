import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
export default defineConfig({
  base:"./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@utils": resolve(__dirname, "./src/utils"),
      "_hook": resolve(__dirname, "./src/utils/hook"),
    }
  },
  server: {
    host: true,
    open: true,
    proxy: {
      // with options
      '/api': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `` // 此处全局的scss文件
      }
    }
  }
})
