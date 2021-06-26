import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { registerSW } from "virtual:pwa-register"
import glyph from "~/components/svg/glyphs/glyph.vue"
import utils from '~/plugins/utils'
registerSW()

createApp(App)
	.use(router)
	.use(utils)
	.component('glyph', glyph)
	.mount('#app')