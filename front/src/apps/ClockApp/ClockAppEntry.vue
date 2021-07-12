<template lang="pug">
.app.clock-app.flex-column-container
	navigation-bar
		template(#left)
			navigation-bar-button(label="Edit")
		template(#right)
			navigation-bar-button(glyph="plus")
	router-view
	tab-bar(:sections="appSections")
</template>


<script>
import navigationBar from '~/components/ui/navigationBar.vue'
import navigationBarButton from '~/components/Buttons/NavigationBarButton.vue'
import tabBar from '~/components/ui/tabBar.vue'
import tabBarButton from '~/components/Buttons/TabBarButton.vue'
export default {
	components: {navigationBar, navigationBarButton, tabBar, tabBarButton},
	setup() {
		const appSections = [
			{name: "ClockAppWorldClock", label: "World Clock", glyph: "globe"},
			{name: "ClockAppAlarm", label: "Alarm", glyph: "alarm"},
			{name: "ClockAppStopwatch", label: "Stopwatch", glyph: "stopwatch"},
			{name: "ClockAppTimer", label: "Timer", glyph: "timer"}
		]
		return { appSections }
	}
}
</script>

<style lang="stylus" scoped>
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