import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
export default defineConfig({
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
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/style/mixin.scss";` // 此处全局的scss文件
      }
    }
  }
})
