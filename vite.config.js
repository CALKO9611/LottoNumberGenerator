import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/LottoNumberGenerator/",
  server: {
    proxy: {
      "/api": {
        target: "https://www.dhlottery.co.kr",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api/, "/common.do?method=getLottoNumber&drwNo="),
      },
    },
  },
});
