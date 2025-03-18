import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: "/domjs/", // Change this if your page is not hosted at a root URL
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // otherName: resolve(__dirname, 'src/other-file.html'), // If you're publishing multiple pages
      },
    },
  },
})
