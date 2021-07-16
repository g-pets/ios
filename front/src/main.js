import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import utils from '~/plugins/utils'


import GlyphsSet from "~/assets/glyphs/GlyphsSet.vue"
import Glyph from "~/assets/glyphs/Glyph.vue"

// Views
import SystemDialog from "~/components/Views/systemDialog.vue"
import TableView from "~/components/Views/TableView.vue"

// Bars
import StatusBar from "~/components/Bars/StatusBar.vue"
import NavigationBar from "~/components/Bars/NavigationBar.vue"
import TabBar from "~/components/Bars/TabBar.vue"

// Controls
import NavigationBarButton from "~/components/Controls/Buttons/NavigationBarButton.vue"
import ToggleButton from "~/components/Controls/Buttons/ToggleButton.vue"
import TabBarButton from '~/components/Controls/Buttons/TabBarButton.vue'

// Misc
import PictureItem from '~/components/Misc/PictureItem.vue'

createApp(App)
	.use(router)
	.use(utils)
	.component('GlyphsSet', GlyphsSet)
	.component('Glyph', Glyph)
	.component('SystemDialog', SystemDialog)
	.component('TableView', TableView)
	.component('StatusBar', StatusBar)
	.component('NavigationBar', NavigationBar)
	.component('TabBar', TabBar)
	.component('NavigationBarButton', NavigationBarButton)
	.component('ToggleButton', ToggleButton)
	.component('TabBarButton', TabBarButton)
	.component('PictureItem', PictureItem)
	.mount('#app')