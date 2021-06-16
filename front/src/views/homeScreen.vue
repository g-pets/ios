<template lang="pug">
.view.view-homescreen
	.apps-grid.drop-zone(@drop='onDrop($event, "screen")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="app in screenApps" :data="app" :key="app.id" :draggable="true" @dragstart='startDrag($event, app)' :class="{onDrag: app.onDrag}")
	.dock.drop-zone(@drop='onDrop($event, "dock")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="app in dockApps" :data="app" :key="app.id" :draggable="true" @dragstart='startDrag($event, app)')
//- img.screenshot(src="/screens/01-home.jpg")
</template>

<script>
import appIcon from '~/components/appIcon.vue'
import {reactive} from 'vue'
export default {
	name: "HomeScreen",
	components: {appIcon},
	methods: {
		openApp(name) {
			this.$router.push({name: name})
		}
	},
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
			app.onDrag = true
			evt.dataTransfer.dropEffect = 'move'
			evt.dataTransfer.effectAllowed = 'move'
			evt.dataTransfer.setData('appId', app.id)
		},
		onDrop (evt, position) {
			// if(position === "dock") return
			const appId = evt.dataTransfer.getData('appId')
			const app = this.apps.find(app => app.id == appId)
			app.position = position
		}
	},
	setup() {
		document.title = "Home Screen | iOS 1"
		const apps = reactive([
			{
				id: 11,
				title: "Notes",
				key: "notesApp",
				icon: "notesApp",
				position: "screen"
			}, {
				id: 1,
				title: "Text",
				key: "textApp",
				icon: "textApp",
				position: "screen"
			}, {
				id: 2,
				title: "Calendar",
				key: "calendarApp",
				icon: "tempIconApp",
				position: "screen"
			}, {
				id: 3,
				title: "Photos",
				key: "photosApp",
				icon: "tempIconApp",
				position: "screen"
			}, {
				id: 4,
				title: "Camera",
				key: "cameraApp",
				icon: "tempIconApp",
				position: "screen"
			}, {
				id: 5,
				title: "YouTube",
				key: "youTubeApp",
				icon: "tempIconApp",
				position: "screen"
			}, {
				id: 6,
				title: "Stocks",
				key: "stocksApp",
				icon: "tempIconApp",
				position: "screen"
			}, {
				id: 7,
				title: "Maps",
				key: "mapsApp",
				icon: "tempIconApp",
				position: "screen"
			}, {
				id: 8,
				title: "Weather",
				key: "weatherApp",
				icon: "tempIconApp",
				position: "screen"
			}, {
				id: 9,
				title: "Clock",
				key: "clockApp",
				icon: "tempIconApp",
				position: "screen"
			}, {
				id: 10,
				title: "Calculator",
				key: "calculatorApp",
				icon: "tempIconApp",
				position: "screen"
			}, {
				id: 12,
				title: "Settings",
				key: "settings",
				icon: "tempIconApp",
				position: "screen"
			}, {
				id: 13,
				title: "Phone",
				key: "phoneApp",
				icon: "tempIconApp",
				position: "dock"
			}, {
				id: 14,
				title: "Mail",
				key: "mailApp",
				icon: "tempIconApp",
				position: "dock"
			}, {
				id: 15,
				title: "Safari",
				key: "safariApp",
				icon: "tempIconApp",
				position: "dock"
			}, {
				id: 16,
				title: "iPod",
				key: "iPodApp",
				icon: "tempIconApp",
				position: "dock"
			}
		])
		return {apps}
	}
};
</script>

<style lang="stylus">
.view-homescreen
	position: relative
	z-index: 1
	// display: flex
	// flex-direction: column
	// height: 100%
	.apps-grid
		padding: 1.1em
		padding-top: 2.4em
		padding-bottom: 0
		display: grid
		// grid-template-columns: repeat(4, 1fr)
		grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr))
		grid-template-rows: repeat(4, 1fr)
		gap: 1em
		justify-items: center
	.dock
		margin-top: auto
		padding: 0.7em 1em 0
		display: grid
		grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr))
		grid-template-rows: repeat(1, 5em)
		gap: 1em
		justify-items: center
		background-image: url("/img/ui/dock.jpg")
		background-repeat: no-repeat
		background-size: cover
		width: 100%
		height: 90px
		.app-icon
			.icon
				box-shadow: 0 0.14em 0.1em rgba(#000,0.6)
			.name
				margin-top: 0.9em
				color: #eee
				text-shadow: 0 -1px #333
.screenshot
	position: absolute
	z-index: 0
	pointer-events: none
	top: 0
	left: 0
	width: 320px
	height: 480px
	opacity: 0
</style>