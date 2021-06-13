import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import icon from "~/components/icons/icon.vue"

createApp(App)
	.use(router)
	.component('icon', icon)
	.mount('#app')