import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from "path"

export default defineConfig({
	plugins: [
		vue(),
		VitePWA({
			base: '/',
			includeAssets: ['img/**/*.*'],
			manifest: {
				"name": "iOS 1.0",
				"short_name": "iOS",
				"start_url": "/",
				"display": "standalone",
				"background_color": "#000000",
				"theme_color": "#000000",
				"icons": [
					{ "src": "./img/icons/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
					{ "src": "./img/icons/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" },
					{ "src": "./img/icons/android-chrome-maskable-192x192.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable" },
					{ "src": "./img/icons/android-chrome-maskable-512x512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
				]
			}
		})
	],
	server: {
		port: 5000,
		host: '0.0.0.0',
		https: true,
		hmr: {
			host: '10.0.1.4',
			port: 81,
		}
	},
	build: {
		chunkSizeWarningLimit: 50,
		manifest: true,
	},
	resolve: {
		alias: {
			"~": resolve(__dirname, "src"),
		},
	},
})