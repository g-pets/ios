<template lang="pug">
.view.view-homescreen
	.apps-grid.drop-zone(@drop='onDrop($event, "screen")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="app in screenApps" :data="app" :key="app.id" :draggable="true" @dragstart='startDrag($event, app)' :class="{onDrag: app.onDrag}")
		app-icon-set(name="notesAppNext")
		.app-icon.live.calendar
			.icon
				.head {{calendarDate.weekday}}
				.day {{calendarDate.date}}
			.name Calendar
		
	//- .dock.drop-zone(@drop='onDrop($event, "dock")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="app in dockApps" :data="app" :key="app.id" :draggable="true" @dragstart='startDrag($event, app)')
//- img.screenshot(src="/screens/01-home.jpg")
</template>

<script>
// import appIcon from '~/components/appIcon.vue'
import appIcon from '~/components/svg/apps/appIcon.vue'
import appIconSet from '~/components/svg/apps/appIconSet.vue'
import {reactive} from 'vue'
export default {
	name: "HomeScreen",
	components: {appIcon, appIconSet},
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
		calendarDate() {
			var date = new Date();
			var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
			var weekday = date.getDay()
			var date = date.getDate()
			return {weekday:weekdays[weekday], date}
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
				name: "Notes",
				key: "notesApp",
				icon: "notesApp",
				position: "screen"
			}, {
				id: 1,
				name: "Text",
				key: "textApp",
				icon: "textApp",
				position: "screen"
			}
			// }, {
			// 	id: 2,
			// 	title: "Calendar",
			// 	key: "calendarApp",
			// 	icon: "calendarApp",
			// 	position: "screen"
			// }, {
			// 	id: 3,
			// 	title: "Photos",
			// 	key: "photosApp",
			// 	icon: "tempIconApp",
			// 	position: "screen"
			// }, {
			// 	id: 4,
			// 	title: "Camera",
			// 	key: "cameraApp",
			// 	icon: "tempIconApp",
			// 	position: "screen"
			// }, {
			// 	id: 5,
			// 	title: "YouTube",
			// 	key: "youTubeApp",
			// 	icon: "youTubeApp",
			// 	position: "screen"
			// }, {
			// 	id: 6,
			// 	title: "Stocks",
			// 	key: "stocksApp",
			// 	icon: "tempIconApp",
			// 	position: "screen"
			// }, {
			// 	id: 7,
			// 	title: "Maps",
			// 	key: "mapsApp",
			// 	icon: "tempIconApp",
			// 	position: "screen"
			// }, {
			// 	id: 8,
			// 	title: "Weather",
			// 	key: "weatherApp",
			// 	icon: "tempIconApp",
			// 	position: "screen"
			// }, {
			// 	id: 9,
			// 	title: "Clock",
			// 	key: "clockApp",
			// 	icon: "tempIconApp",
			// 	position: "screen"
			// }, {
			// 	id: 10,
			// 	title: "Calculator",
			// 	key: "calculatorApp",
			// 	icon: "calculatorApp",
			// 	position: "screen"
			// }, {
			// 	id: 12,
			// 	title: "Settings",
			// 	key: "settings",
			// 	icon: "tempIconApp",
			// 	position: "screen"
			// }, {
			// 	id: 13,
			// 	title: "Phone",
			// 	key: "phoneApp",
			// 	icon: "phoneApp",
			// 	position: "dock"
			// }, {
			// 	id: 14,
			// 	title: "Mail",
			// 	key: "mailApp",
			// 	icon: "tempIconApp",
			// 	position: "dock"
			// }, {
			// 	id: 15,
			// 	title: "Safari",
			// 	key: "safariApp",
			// 	icon: "tempIconApp",
			// 	position: "dock"
			// }, {
			// 	id: 16,
			// 	title: "iPod",
			// 	key: "iPodApp",
			// 	icon: "iPodApp",
			// 	position: "dock"
			// }
		])
		return {apps}
	}
};
</script>

<style lang="stylus">
.app-icon.live.calendar
	cursor: pointer
	.icon
		width: 3.5em
		height: 3.5em
		overflow: hidden
		border-radius: 0.7em
		background: #fff
		.head
			font-size: 0.5em
			line-height: 2.2
			text-align: center
			background: red
			color: #fff
			font-weight: bold
			background: linear-gradient(180deg, #EC9C9E 13.54%, #D13335 100%)
			// box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.3), inset 0px -3px 3px rgba(0, 0, 0, 0.3)
			text-shadow: 0px -0.05em 0 rgba(0, 0, 0, 0.35)
		.day
			color: #333
			text-align: center
			font-size:2.3em
			font-weight: bold
			line-height: 1.15
	.name
		margin-top: 0.5em
		text-align: center
		font-size: 0.7em
		color: #ccc
		line-height: 1
.view-homescreen
	// position: relative
	// height: 46rem
	overflow: hidden
	
	// z-index: 1
	display: flex
	flex-direction: column
	.apps-grid
		height: 50rem
		flex: 1 0 auto
		padding: 1.1em
		// padding-top: 2.4em
		padding-bottom: 0
		display: grid
		// grid-template-columns: repeat(4, 1fr)
		grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr))
		grid-template-rows: repeat(4, 7rem)
		gap: 1.5em
		justify-items: center
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
	opacity: 0
</style>