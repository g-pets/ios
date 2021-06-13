<template lang="pug">
.view.view-homescreen
	.apps-grid
		app-icon(v-for="app in apps" :data="app")
	//- .dock
</template>

<script>
import appIcon from '~/components/appIcon.vue'
export default {
	name: "HomeScreen",
	components: {appIcon},
	methods: {
		openApp(name) {
			this.$router.push({name: name})
		}
	},
	setup() {
		const apps = [
			{
				title: "Text",
				key: "textApp",
			}, {
				title: "Calendar",
				key: "calendarApp"
			}, {
				title: "Photos",
				key: "photosApp"
			}, {
				title: "Camera",
				key: "cameraApp"
			}, {
				title: "YouTube",
				key: "youTubeApp"
			}, {
				title: "Stocks",
				key: "stocksApp"
			}, {
				title: "Maps",
				key: "mapsApp"
			}, {
				title: "Weather",
				key: "weatherApp"
			}, {
				title: "Clock",
				key: "clockApp"
			}, {
				title: "Calculator",
				key: "calculatorApp"
			}, {
				title: "Notes",
				key: "notesApp"
			}, {
				title: "Settings",
				key: "settings"
			}
		]
		return {apps}
	}
};
</script>

<style lang="stylus">
.view-homescreen
	.apps-grid
		padding: 1em
		display: grid
		grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr))
		// grid-auto-rows: 1fr
		grid-template-rows: repeat(4, 1fr)
		gap: 1em
		justify-items: center
	.dock
		background: #333
		width: 100%
		height: 4em
</style>