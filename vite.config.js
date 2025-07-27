// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Accept connections from external devices
    port: 5173,
    strictPort: true, // If port is taken, fail instead of using a random one
    https: false,
    cors: true,
    hmr: {
      protocol: 'wss',
      host: '69f0b10d8cbb.ngrok-free.app',
      clientPort: 443,
    }
  }
});
