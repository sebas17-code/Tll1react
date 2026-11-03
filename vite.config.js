import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA({
    registerType: 'autoUpdate',
      workbox: {
      globPatterns: ['**/*.{js,jsx,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.svg', 'icons.svg'],
      manifest: {
        name: 'mi primera pwa',
        short_name: 'MyApppwa',
        description: 'la fantastica app PWA del mundo mundial',
        scope:'/',
        start_url:'/',
        display:'standalone',
        
        theme_color: '#000000',

        screenshots: [
          {
            src: "deadpool.jpg",
            sizes: "640x480",
            type: "image/jpg",
            form_factor: "wide"
          }
        ],
        icons: [
          {
            src: 'images2.jpg',
            sizes: '192x192',
            type: 'image/jpg'
          },
          {
            src: 'images.jpg',
            sizes: '512x512',
            type: 'image/jpg'
          }
        ]
      }
    })
  ],
})
