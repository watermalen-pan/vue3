import * as path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名 vite使用引用时出现地址引用不到的问题
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue(), vueJsx()],
});
