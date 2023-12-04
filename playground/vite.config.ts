import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueJsxProps from 'vite-plugin-tsx-auto-props'

const baseUrl = fileURLToPath(new URL('./', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsxProps(), vue(), vueJsx()],
  resolve: {
    alias: [
      {
        replacement: resolve(baseUrl, '../src'),
        find: '@antdv-pro/layout',
      },
      {
        find: 'ant-design-vue/dist',
        replacement: 'ant-design-vue/dist',
      },
      {
        find: 'ant-design-vue/lib',
        replacement: 'ant-design-vue/es',
      },
      {
        find: 'ant-design-vue/es',
        replacement: 'ant-design-vue/es',
      },
      {
        find: 'ant-design-vue',
        replacement: 'ant-design-vue/es',
      },
    ],
  },
})
