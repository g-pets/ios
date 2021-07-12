<template lang="pug">
.view.view-homescreen
	.apps-grid.drop-zone(@drop='onDrop($event, "screen")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="(app, index) in screenApps" :icon="app.icon" :title="app.title" :route="app.route" :draggable="false" @dragstart='startDrag($event, app)')
	.dock.drop-zone(@drop='onDrop($event, "dock")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="app in dockApps" :icon="app.icon" :title="app.title" :route="app.route" :draggable="false" @dragstart='startDrag($event, app)')
</template>


<script>
import appIcon from "~/components/AppsIcons/IconBase.vue"
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
				icon: "IconPhoneApp",
				title: "Phone",
				route: "PhoneAppKeypad",
				position: "dock"
			}, {
				icon: "IconMailApp",
				title: "Mail",
				route: "ComingSoon",
				position: "dock"
			}, {
				icon: "IconSafariApp",
				title: "Safari",
				route: "ComingSoon",
				position: "dock"
			}, {
				icon: "IconiPodApp",
				title: "iPod",
				route: "ComingSoon",
				position: "dock"
			
			// Screen
			}, {
				icon: "IconTextApp",
				title: "Text",
				route: "TextAppConversations",
				position: "screen"
			}, {
				icon: "IconCalendarApp",
				title: "Calendar",
				route: "ComingSoon",
				position: "screen"
			}, {
				icon: "IconPhotosApp",
				title: "Photos",
				route: "PhotosAppAlbums",
				position: "screen"
			}, {
				icon: "IconCameraApp",
				title: "Camera",
				route: "CameraAppEntry",
				position: "screen"
			}, {
				icon: "IconYouTubeApp",
				title: "YouTube",
				route: "ComingSoon",
				position: "screen"
			}, {
				icon: "IconStocksApp",
				title: "Stocks",
				route: "ComingSoon",
				position: "screen"
			}, {
				icon: "IconMapsApp",
				title: "Maps",
				route: "ComingSoon",
				position: "screen"
			}, {
				icon: "IconWeatherApp",
				title: "Weather",
				route: "ComingSoon",
				position: "screen"
			}, {
				icon: "IconClockApp",
				title: "Clock",
				route: "ClockAppWorldClock",
				position: "screen"
			}, {
				icon: "IconCalculatorApp",
				title: "Calculator",
				route: "CalculatorAppEntry",
				position: "screen"
			}, {
				icon: "IconNotesApp",
				title: "Notes",
				route: "ComingSoon",
				position: "screen"
			}, {
				icon: "IconSettingsApp",
				title: "Settings",
				route: "ComingSoon",
				position: "screen"
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
		padding: 0.7em 1em 0.1em
		display: grid
		grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr))
		gap: 1em
		// background: linear-gradient(180deg, #8d8d8d 80%, #6e6e6e 80%)
		background: url("/temp/ui/dock.jpg")
		background-size: cover
		width: 100%
		:deep(.app-item)
			.app-icon
				box-shadow: 0 0.14em 0.1em rgba(#000,0.3)
			.app-title
				margin-top: 0.7em
				color: #eee
				text-shadow: 0 -1px #333
</style>