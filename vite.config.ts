import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  plugins: [react()],
});

/* '@components': path.resolve(__dirname, './src/components'),
'@img': path.resolve(__dirname, './src/assets/img'),
'@interfaces': path.resolve(__dirname, '/src/interfaces/*'), */
