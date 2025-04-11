import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  server: {
    host: true,
    port: 3000,
    hmr: {
      clientPort: 443,
      host: 'localhost',
    },
    cors: true,
    strictPort: false,
    middlewareMode: false,
    fs: {
      strict: false,
      allow: ['..']
    },
    origin: 'http://localhost:3000'
  }
});