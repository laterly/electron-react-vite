import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const root = resolve(__dirname, "src/render");
const outDir = resolve(__dirname, "dist/");
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    root,
    base: "./",
    // publicDir: outDir,
    build: {
      outDir,
    },
    resolve: {
      alias: {
        // 别名必须以 / 开头、结尾
        "@": root,
      },
    },
    plugins: [react()],
    server: {
      host: "127.0.0.1",
      port: "8090",
    },
  };
});
