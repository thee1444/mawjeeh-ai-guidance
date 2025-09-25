// // import { defineConfig } from "vite";
// // import react from "@vitejs/plugin-react-swc";
// // import path from "path";
// // import { componentTagger } from "lovable-tagger";

// // // https://vitejs.dev/config/
// // export default defineConfig(({ mode }) => ({
// //   server: {
// //     host: "::",
// //     port: 8080,
// //   },
// //   plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
// //   resolve: {
// //     alias: {
// //       "@": path.resolve(__dirname, "./src"),
// //     },
// //   },
// // }));

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/mawjeeh-ai-guidance/', // أضف هذا السطر مع اسم المستودع
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // هذا السطر يحل مشكلة ظهور الصفحة البيضاء
  base: '/mawjeeh-ai-guidance/', 
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));