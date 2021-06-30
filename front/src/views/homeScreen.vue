<template lang="pug">
.view.view-homescreen(:class="{shake}")
	//- .generate(@click="generateData") generateData
	.apps-grid.drop-zone(@drop='onDrop($event, "screen")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="(app, index) in screenApps" :class="`item_${index}`" :name="app.name" :title="app.title" :router="app.router" :key="app.id" :draggable="true" @dragstart='startDrag($event, app)')

			
		
	.dock.drop-zone(@drop='onDrop($event, "dock")' @dragover.prevent @dragenter.prevent)
		app-icon.drag-el(v-for="app in dockApps" :name="app.name" :title="app.title" :router="app.router" :key="app.id" :draggable="true" @dragstart='startDrag($event, app)')
//- img.screenshot(src="/screens/01-home.jpg")
</template>

<script>
import appIcon from '~/components/appsIcons/appIcon.vue'
import {appStateFunctions} from "~/store/appState"
import generateData from "~/generator"
import {reactive} from 'vue'
export default {
	name: "HomeScreen",
	components: {appIcon},
	data() {
		return {
			shake: false,
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
		const {unlockPhone} = appStateFunctions()
		// const {generateData} = generateData()
		unlockPhone()
		const apps = reactive([
			{
				id: 1,
				title: "Phone",
				name: "phoneApp",
				router: "phoneApp_keypad",
				position: "dock"
			}, {
				id: 2,
				title: "Text",
				name: "textApp",
				router: "textApp_conversations",
				position: "dock"
			}, {
				id: 9,
				title: "Clock",
				name: "clockApp",
				router: "clockApp_worldClock",
				position: "screen"
			// }, {
			// 	id: 11,
			// 	title: "Notes",
			// 	name: "notesApp",
			// 	position: "screen"
			
			// }, {
			// 	id: 2,
			// 	title: "Calendar",
			// 	name: "calendarApp",
			// 	position: "screen"
			
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
		return {apps, generateData}
	}
};
</script>

<style lang="stylus" scoped>
// .appsIconsTransition-enter-active, .appsIconsTransition-leave-active
// 	transition: all 1s ease
// .appsIconsTransition-enter-from, .appsIconsTransition-leave-to
// 	opacity: 0
// 	transform: translateY(30px)

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
		gap: 50vw
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
		:deep(.app-item)
			.app-icon
				box-shadow: 0 0.14em 0.1em rgba(#000,0.3)
			.app-title
				margin-top: 0.6em
				color: #eee
				text-shadow: 0 -1px #333

// Jiggle on Edit
.view-homescreen
	.apps-grid
		// animation: .5s appsEnter alternate ease-in-out
		gap: 5vw

	&.shake
		:deep(.app-item)
			&:nth-child(2n)
				.app-icon
					animation: jiggleOne infinite alternate ease-in-out
					transform-origin: 50% 10%
			&:nth-child(2n-1)
				.app-icon
					animation: jiggleTwo infinite alternate ease-in-out
					transform-origin: 30% 5%

	
	@keyframes jiggleOne
		from
			transform: rotate(-1deg)
		to
			transform: rotate(1.5deg)

	@keyframes jiggleTwo
		from
			transform: rotate(1deg)
		to
			transform: rotate(-1.5deg)
	
	@keyframes appsEnter
		from
			gap: 10vw
			opacity: 0
		to
			gap: 5vw
			opacity: 1
		
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