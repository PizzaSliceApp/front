import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/'),
      '@modules': path.resolve(__dirname, './src/modules/'),
      '@common': path.resolve(__dirname, './src/common/'),
    },
  },
});
