import { fileURLToPath, URL } from 'node:url'
const { name } = require('./package')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    qiankun('vue app', { // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 7002
  },
  build: {
    target: 'esnext',
    lib: {
      name: `${name}-[name]`,
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['umd']
    }
  }
})
