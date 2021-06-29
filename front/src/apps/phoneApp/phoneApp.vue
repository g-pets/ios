<template lang="pug">
.app.phone-app.flex-column-container
	router-view
	tab-bar(:sections="appSections")
</template>

<script>
import tabBar from '~/components/ui/tabBar.vue'
import useStore from "~/store/store"
import { onMounted, onUnmounted } from 'vue'
export default {
	name: "phoneApp",
	components: {tabBar},
	setup() {
		document.title = "Phone App | iOS"
		const { recordsToStore, cleanStore } = useStore('contacts')
		const appSections = [
			{name: "phoneApp_favorites", label: "Favorites", glyph: "favorite"},
			{name: "phoneApp_recents", label: "Recents", glyph: "recent"},
			{name: "phoneApp_contacts", label: "Contacts", glyph: "contacts"},
			{name: "phoneApp_keypad", label: "Keypad", glyph: "keypad"},
			{name: "phoneApp_voicemail", label: "Voicemail", glyph: "voicemail"}
		]
		onMounted(() => recordsToStore())
		onUnmounted(() => cleanStore())
		return { appSections }
	}
}
</script>

<style lang="stylus" scoped>
.phone-app
	background: #fff
	position: relative
</style>