// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Correct plugin import for v4

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({ // <-- THE TAILWIND CONFIGURATION GOES HERE
      // This is the equivalent of your tailwind.config.js for v4 with @tailwindcss/vite
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            'custom-font': ['CustomFont', 'sans-serif'],
            // Add other fonts here if needed
          },
        },
      },
      // You can also add other Tailwind config options here like 'plugins' if you had them
    }),
  ],
})