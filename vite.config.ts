import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
import { componentTagger } from "lovable-tagger";
=======
>>>>>>> b8b473e (Initial commit with portfolio project files)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
<<<<<<< HEAD
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
=======
  ],
>>>>>>> b8b473e (Initial commit with portfolio project files)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
