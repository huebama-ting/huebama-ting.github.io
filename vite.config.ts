import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: "lightningcss",
  },
  css: {
    transformer: "lightningcss",
  },
  plugins: [
    react({
      plugins: [["@swc/plugin-emotion", {}]],
    }),
    tsconfigPaths(),
    VitePWA({
      devOptions: { enabled: true, type: "module" },
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
          "**/*.{js,json,css,html,txt,ico,png,svg,webp,woff2,woff2}",
        ],
      },
    }),
  ],
});
