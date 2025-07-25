import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      // disable type checking
      babel: {
        plugins: [
          [
            "@babel/plugin-transform-typescript",
            { isTSX: true, allExtensions: true },
          ],
        ],
      },
    }),
  ],
});
