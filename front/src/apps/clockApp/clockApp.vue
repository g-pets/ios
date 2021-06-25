<template lang="pug">
.app.clock-app
	navigation-bar(title="World Clock")
		template(#left)
			navigation-bar-button(label="Edit")
		template(#right)
			navigation-bar-button(glyph="plus")
	router-view.content
	tab-bar(:sections="appSections")
</template>

<script>
import navigationBar from '~/components/ui/navigationBar.vue'
import navigationBarButton from '~/components/buttons/navigationBarButton.vue'
import tabBar from '~/components/ui/tabBar.vue'
import tabBarButton from '~/components/buttons/tabBarButton.vue'
export default {
	name: "textApp",
	components: {navigationBar, navigationBarButton, tabBar, tabBarButton},
	data() {
		return {
			appSections: [
				{name: "clockApp_worldClock", label: "World Clock", glyph: "globe"},
				{name: "clockApp_alarm", label: "Alarm", glyph: "alarm"},
				{name: "clockApp_stopwatch", label: "Stopwatch", glyph: "stopwatch"},
				{name: "clockApp_timer", label: "Timer", glyph: "timer"}
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
.screenshot
	position: absolute
	top: -9em
	left: 0
	background-image: url("/screens/clockApp-worldMap.jpg")
	width: 100%
	height: 100%
	background-repeat: no-repeat
	background-size: cover
	z-index: 0
	opacity: 1
	// opacity: 0.5
.navigation-bar
	background: linear-gradient(180deg, #c1cbdb 0%, #8093b3 50%, #577398 100%)
.clock-app
	height: 100%
	background: repeating-linear-gradient(90deg, #4C5D73, #4C5D73 10px, #4F6075 10px, #4F6075 11px)
	display: flex
	flex-direction: column
	.content
		display: flex
		flex-direction: column
		justify-content: flex-start
		flex: 1 0 auto
</style>