import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Add explicit aliases for common paths
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/config": path.resolve(__dirname, "./src/config"),
      "@/sections": path.resolve(__dirname, "./src/sections"),
      "@/types": path.resolve(__dirname, "./src/types"),
    }
  },
  // Force Vite to respect TypeScript paths
  optimizeDeps: {
    force: true
  }
})