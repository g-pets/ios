<template lang="pug">
.app.phone-app.flex-column-container
	router-view
	tab-bar(:sections="appSections")
</template>


<script>
import { onMounted, onUnmounted } from "vue"
import useStore from "~/store/store"
export default {
	setup() {
		document.title = "Phone App | iOS"
		const { recordsToStore, cleanStore } = useStore("contacts")
		const appSections = [
			{name: "PhoneAppFavorites", label: "Favorites", glyph: "favorite"},
			{name: "PhoneAppRecents", label: "Recents", glyph: "recent", disabled: true},
			{name: "PhoneAppContacts", label: "Contacts", glyph: "contacts"},
			{name: "PhoneAppKeypad", label: "Keypad", glyph: "keypad"},
			{name: "PhoneAppVoicemail", label: "Voicemail", glyph: "voicemail"}
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