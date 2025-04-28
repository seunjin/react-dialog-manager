import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@react-dialog-manager": path.resolve(__dirname, "../library/dist"),
    },
  },
  server: {
    port: 5173,
  },
});
