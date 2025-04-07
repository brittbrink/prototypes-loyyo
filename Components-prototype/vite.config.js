import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'maskable_icon_x384.png',
        'android-chrome-192x192.png'
      ],
      manifest: {
        name: 'Components Prototype',
        short_name: 'Components',
        description: 'A prototype for testing components',
        theme_color: '#ffffff',
        background_color: "#e8eac2",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "any",
        icons: [
          {
            src: '/maskable_icon_x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          }
        ]
      }
    })

  ],
})
