import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ReactDialogManager",
      formats: ["es", "cjs"],
      fileName: (format) => `react-dialog-manager.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    outDir: "dist", // 루트에 dist 폴더로 출력
    emptyOutDir: false, // dist 폴더 비우고 빌드
  },
});
