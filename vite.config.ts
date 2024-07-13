import { resolve } from "node:path";

import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react-swc";
import TurboConsole from "unplugin-turbo-console/vite";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { VitePWA } from "vite-plugin-pwa";
import { qrcode } from "vite-plugin-qrcode";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: "lightningcss",
    target: "es2022",
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("@glide")) {
            return "@glide";
          }

          if (id.includes("react-icons")) {
            return "react-icons";
          }

          if (id.includes("react-router-dom") || id.includes("react-router")) {
            return "react-router";
          }
        },
      },
    },
  },
  css: {
    transformer: "lightningcss",
  },
  plugins: [
    eslintPlugin(),
    qrcode(),
    react({
      devTarget: "es2022",
      plugins: [["@swc/plugin-emotion", {}]],
    }),
    tsconfigPaths(),
    TurboConsole(),
    ViteImageOptimizer(),
    VitePWA({
      devOptions: {
        enabled: true,
        suppressWarnings: true,
      },
      includeAssets: [
        "favicon.ico",
        "favicon.svg",
        "apple-touch-icon-180x180.png",
      ],
      manifest: {
        name: "Huebama",
        short_name: "Huebama",
        description: "Huebama's personal website",
        theme_color: "#051423",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: [
          "**/*.{js,json,css,html,txt,ico,jpg,jpeg,png,svg,webp,woff2}",
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
    },
  },
});
