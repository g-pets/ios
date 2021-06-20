<template lang="pug">
.view.view-homescreen
	.apps-grid.drop-zone(@drop='onDrop($event, "screen")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="app in screenApps" :name="app.name" :title="app.title" :key="app.id" :draggable="true" @dragstart='startDrag($event, app)')

			
		
	.dock.drop-zone(@drop='onDrop($event, "dock")' @dragover.prevent @dragenter.prevent)
		//- app-icon.drag-el(v-for="app in dockApps" :name="app.name" :title="app.title" :key="app.id" :draggable="true" @dragstart='startDrag($event, app)')
//- img.screenshot(src="/screens/01-home.jpg")
</template>

<script>
import appIcon from '~/components/appsIcons/appIcon.vue'
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
		},
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
		document.title = "Home Screen | iOS 1.0"
		const apps = reactive([
			{
			// 	id: 11,
			// 	title: "Notes",
			// 	name: "notesApp",
			// 	position: "screen"
			// }, {
			// 	id: 1,
			// 	title: "Text",
			// 	name: "textApp",
			// 	position: "screen"
			// }, {
			// 	id: 2,
			// 	title: "Calendar",
			// 	name: "calendarApp",
			// 	position: "screen"
			// }, {
				id: 9,
				title: "Clock",
				name: "clockApp",
				position: "screen"
			
			// }, {
			// 	id: 3,
			// 	title: "Photos",
			// 	name: "tempIcon",
			// 	position: "screen"
			// }, {
			// 	id: 4,
			// 	title: "Camera",
			// 	name: "tempIcon",
			// 	position: "screen"
			// }, {
			// 	id: 5,
			// 	title: "YouTube",
			// 	name: "tempIcon",
			// 	position: "screen"
			// }, {
			// 	id: 6,
			// 	title: "Stocks",
			// 	name: "tempIcon",
			// 	position: "screen"
			// }, {
			// 	id: 7,
			// 	title: "Maps",
			// 	name: "tempIcon",
			// 	position: "screen"
			// }, {
			// 	id: 8,
			// 	title: "Weather",
			// 	name: "tempIcon",
			// 	position: "screen"
			
			// }, {
			// 	id: 10,
			// 	title: "Calculator",
			// 	name: "tempIcon",
			// 	position: "screen"
			// }, {
			// 	id: 12,
			// 	title: "Settings",
			// 	name: "tempIcon",
			// 	position: "screen"
			// }, {
			// 	id: 13,
			// 	title: "Phone",
			// 	name: "phoneApp",
			// 	position: "screen"
			// }, {
			// 	id: 14,
			// 	title: "Mail",
			// 	name: "tempIcon",
			// 	position: "dock"
			// }, {
			// 	id: 15,
			// 	title: "Safari",
			// 	name: "tempIcon",
			// 	position: "dock"
			// }, {
			// 	id: 16,
			// 	title: "iPod",
			// 	name: "iPodApp",
			// 	position: "screen"
			
			}
		])
		return {apps}
	}
};
</script>

<style lang="stylus">
.view-homescreen
	display: flex
	flex-direction: column
	height: 100%
	.apps-grid
		flex: 1 0 auto
		padding: 1.1em
		padding-bottom: 0
		display: grid
		gap: 5vw
		grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr))
		align-content: start
	.dock
		height: 9rem
		overflow: hidden
		margin-top: auto
		padding: 0.7em 1em 0
		display: grid
		grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr))
		grid-template-rows: repeat(1, 5em)
		gap: 1em
		justify-items: center
		background: url("/img/ui/dock.jpg")
		background-repeat: no-repeat
		background-size: cover
		width: 100%
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
	opacity: 0.8
</style>