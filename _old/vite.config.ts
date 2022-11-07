import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    eslint(),
    ViteFonts({
      custom: {
        families: [
          {
            name: "CircularStdLight",
            local: "CircularStdLight",
            src: "./src/ui/assets/fonts/CircularStd-Book.woff2",
          }, {
            name: "CircularStdLight",
            local: "CircularStdLight",
            src: "./src/ui/assets/fonts/CircularStd-Book.woff",
          }, {
            name: "CircularStdMedium",
            local: "CircularStdMedium",
            src: "./src/ui/assets/fonts/CircularStd-Medium.woff2",
          }, {
            name: "CircularStdMedium",
            local: "CircularStdMedium",
            src: "./src/ui/assets/fonts/CircularStd-Medium.woff",
          }, {
            name: "CircularStdBold",
            local: "CircularStdBold",
            src: "./src/ui/assets/fonts/CircularStd-Bold.woff2",
          }, {
            name: "CircularStdBold",
            local: "CircularStdBold",
            src: "./src/ui/assets/fonts/CircularStd-Bold.woff",
          }, {
            name: "CircularStdBlack",
            local: "CircularStdBlack",
            src: "./src/ui/assets/fonts/CircularStd-Black.woff2",
          }, {
            name: "CircularStdBlack",
            local: "CircularStdBlack",
            src: "./src/ui/assets/fonts/CircularStd-Black.woff",
          }
        ],
        display: "auto",
        preload: true,
      }
    })
  ],
});