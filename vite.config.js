import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: [
      // eslint-disable-next-line no-undef
      { find: "~", replacement: path.resolve(__dirname, "src") },
      // eslint-disable-next-line no-undef
      { find: "c", replacement: path.resolve(__dirname, "src/components") },
      // eslint-disable-next-line no-undef
      { find: "svgs", replacement: path.resolve(__dirname, "src/components/assets/fontello/SVG") },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // creating a chunk to @open-ish deps. Reducing the vendor chunk size
          if (id.includes("@open-ish") || id.includes("tslib")) {
            return "@open-ish";
          }
          // creating a chunk to react routes deps. Reducing the vendor chunk size
          if (id.includes("react-router-dom") || id.includes("@remix-run") || id.includes("react-router")) {
            return "@react-router";
          }
        },
      },
    },
  },
});
