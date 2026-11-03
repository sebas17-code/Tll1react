import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// Cambia 'nombre-del-repositorio' por el nombre real de tu repo en GitHub
const REPO_BASE = '/Tll1react/' 

export default defineConfig({
  base: REPO_BASE, // Configuración para GitHub Pages
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.svg', 'icons.svg'],
      manifest: {
        name: 'mi primera pwa',
        short_name: 'MyApppwa',
        description: 'la fantastica app PWA del mundo mundial',
        scope: REPO_BASE,     // Debe coincidir con el base de GitHub Pages
        start_url: REPO_BASE, // Debe apuntar a la ruta base de la app
        display: 'standalone',
        theme_color: '#000000',
        screenshots: [
          {
            src: 'deadpool.jpg',
            sizes: '640x480',
            type: 'image/jpeg', // Corregido de image/jpg a image/jpeg
            form_factor: 'wide'
          }
        ],
        icons: [
          {
            src: 'images2.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: 'images.jpg',
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ]
      }
    })
  ]
})