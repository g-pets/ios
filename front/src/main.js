import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { registerSW } from "virtual:pwa-register"
import glyph from "~/components/svg/glyphs/glyph.vue"
registerSW()

createApp(App)
	.use(router)
	.component('glyph', glyph)
	.mount('#app')