<template lang="pug">
.app.phone-app
	router-view.content
	tab-bar(:sections="appSections")

</template>

<script>
import tabBar from '~/components/ui/tabBar.vue'
export default {
	name: "phoneApp",
	components: {tabBar},
	data() {
		return {
			appSections: [
				{name: "phoneApp_favorites", label: "Favorites", glyph: "globe"},
				{name: "phoneApp_recents", label: "Recents", glyph: "alarm"},
				{name: "phoneApp_contacts", label: "Contacts", glyph: "stopwatch"},
				{name: "phoneApp_keypad", label: "Keypad", glyph: "timer"},
				{name: "phoneApp_voicemail", label: "Voicemail", glyph: "timer"}
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
.phone-app
	height: 100%
	background: #000
	display: flex
	flex-direction: column
	.content
		display: flex
		flex-direction: column
		justify-content: flex-start
		flex: 1 0 auto
</style>