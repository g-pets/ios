import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import glyph from "~/components/svg/glyphs/glyph.vue"
import utils from '~/plugins/utils'


createApp(App)
	.use(router)
	.use(utils)
	.component('glyph', glyph)
	.mount('#app')