import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      library: path.resolve(__dirname, "../library/src"),
    },
  },
  server: {
    port: 5173,
  },
});
