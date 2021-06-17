import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import glyph from "~/components/svg/glyphs/glyph.vue"

createApp(App)
	.use(router)
	.component('glyph', glyph)
	.mount('#app')