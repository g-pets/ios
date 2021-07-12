<template lang="pug">
.view.view-homescreen
	.apps-grid.drop-zone(@drop='onDrop($event, "screen")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="(app, index) in screenApps" :name="app.name" :title="app.title" :router="app.router" :key="app.id" :draggable="true" @dragstart='startDrag($event, app)')
	.dock.drop-zone(@drop='onDrop($event, "dock")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="app in dockApps" :name="app.name" :title="app.title" :router="app.router" :key="app.id" :draggable="true" @dragstart='startDrag($event, app)')
</template>


<script>
import appIcon from "~/components/appsIcons/appIcon.vue"
import { reactive } from "vue"
export default {
	components: { appIcon },
	computed: {
		screenApps () {
			return this.apps.filter(app => app.position === "screen")
		},
		dockApps () {
			return this.apps.filter(app => app.position === "dock")
		}
	},
	methods: {
		startDrag: (evt, app) => {
			// app.onDrag = true
			// evt.dataTransfer.dropEffect = 'move'
			// evt.dataTransfer.effectAllowed = 'move'
			// evt.dataTransfer.setData('appId', app.id)
		},
		onDrop (evt, position) {
			// const appId = evt.dataTransfer.getData('appId')
			// const app = this.apps.find(app => app.id == appId)
			// app.position = position
		}
	},
	setup() {
		document.title = "Home Screen | iOS 1.0"
		const apps = reactive([
			{
				title: "Phone",
				name: "phoneApp",
				router: "PhoneAppKeypad",
				position: "dock"
			}, {
				title: "Mail",
				name: "mailApp",
				position: "dock",
				router: "ComingSoon",
			}, {
				title: "Safari",
				name: "safariApp",
				position: "dock",
				router: "ComingSoon",
			}, {
				title: "iPod",
				name: "iPodApp",
				position: "dock",
				router: "ComingSoon",
			
			// Screen
			}, {
				title: "Text",
				name: "textApp",
				router: "TextAppConversations",
				position: "screen"
			}, {
				title: "Calendar",
				name: "calendarApp",
				position: "screen",
				router: "ComingSoon",
			}, {
				title: "Photos",
				name: "photosApp",
				position: "screen",
				router: "PhotosAppAlbums",
			}, {
				title: "Camera",
				name: "cameraApp",
				position: "screen",
				router: "CameraAppEntry",
			}, {
				title: "YouTube",
				name: "youTubeApp",
				position: "screen",
				router: "ComingSoon",
			}, {
				title: "Stocks",
				name: "stocksApp",
				position: "screen",
				router: "ComingSoon",
			}, {
				title: "Maps",
				name: "mapsApp",
				position: "screen",
				router: "ComingSoon",
			}, {
				title: "Weather",
				name: "weatherApp",
				position: "screen",
				router: "ComingSoon",
			}, {
				title: "Clock",
				name: "clockApp",
				router: "ClockAppWorldClock",
				position: "screen"
			}, {
				title: "Calculator",
				name: "CalculatorApp",
				router: "CalculatorAppEntry",
				position: "screen",
			}, {
				title: "Notes",
				name: "notesApp",
				position: "screen",
				router: "ComingSoon",
			}, {
				id: 16,
				title: "Settings",
				name: "settingsApp",
				position: "screen",
				router: "ComingSoon",
			}
		])
		return { apps }
	}
}
</script>


<style lang="stylus" scoped>
.view-homescreen
	display: flex
	flex-direction: column
	width: 100%
	height: 100%
	overflow: hidden
	.apps-grid
		flex: 1 0 auto
		padding: 1.1em
		padding-bottom: 0
		display: grid
		gap: 1em
		grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr))
		align-content: start
	.dock
		overflow: hidden
		margin-top: auto
		padding: 0.7em 1em 0.4em
		display: grid
		grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr))
		gap: 1em
		background: linear-gradient(180deg, #8d8d8d 80%, #6e6e6e 80%)
		width: 100%
		:deep(.app-item)
			.app-icon
				box-shadow: 0 0.14em 0.1em rgba(#000,0.3)
			.app-title
				margin-top: 0.5em
				color: #eee
				text-shadow: 0 -1px #333
</style>