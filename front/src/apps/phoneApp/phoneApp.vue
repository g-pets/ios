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
				{name: "phoneApp_favorites", label: "Favorites", glyph: "favorite"},
				{name: "phoneApp_recents", label: "Recents", glyph: "recent"},
				{name: "phoneApp_contacts", label: "Contacts", glyph: "contacts"},
				{name: "phoneApp_keypad", label: "Keypad", glyph: "keypad"},
				{name: "phoneApp_voicemail", label: "Voicemail", glyph: "voicemail"}
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
.phone-app
	height: 100%
	background: #fff
	display: flex
	flex-direction: column
	.content
		height: 420px
		// flex: 1 0 auto
		overflow: scroll
</style>