import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/survey": {
        target: "http://localhost/3000/",
        secure: false,
      },
    },
  },
});
