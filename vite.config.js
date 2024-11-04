import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  server: {
    host: "0.0.0.0", // This allows network access
    port: 3000, // Use any port you prefer
  },
});
