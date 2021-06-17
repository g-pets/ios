<template lang="pug">
glyphs-set
apps-set
.app-container
	status-bar
	.main
		router-view
	//- .phone-body
	//- 	icon(name="home-button" @click="goHome")
</template>

<script>
import glyphsSet from '~/components/svg/glyphs/glyphsSet.vue'
import appsSet from '~/components/svg/apps/src/set.vue'
import statusBar from '~/components/ui/statusBar.vue'
export default {
	name: "App",
	components: {glyphsSet, appsSet, statusBar},
	methods: {
		goHome() {
			this.$router.push({name: 'homeScreen'})
		}
	}
};
</script>

<style lang="stylus">
@import "./assets/styles/index.styl"
.app-container
	width: 100vw
	height: 100vh
	background: #000
	display: grid
	grid-template-columns: 1fr
	grid-template-rows: max-content 1fr auto
	grid-template-areas: 'header' 'main' 'footer'
	// .status-bar
		
	.main
		overflow: scroll
		// height: 46rem
	.phone-body
		bakground: #333
		padding: 1em
		.icon
			display: block
			cursor: pointer
			width: 7rem
			height: 7rem
			margin: 0 auto
			fill: none
</style>