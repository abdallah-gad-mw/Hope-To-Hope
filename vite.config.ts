import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcsvite from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tailwindcsvite(),
    tsconfigPaths()
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
});
