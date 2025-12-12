import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      react(),
      svgr(),
    ],
    resolve: {
        alias: {
            './runtimeConfig': './runtimeConfig.browser',
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@api': path.resolve(__dirname, './src/api'),
            '@icons': path.resolve(__dirname, './src/icons'),
        },
    }
})
