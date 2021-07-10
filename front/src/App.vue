<template lang="pug">
.device
	.screen.flex-column-container
		router-view
	.buttom-side.section-fixed
		home-button
</template>

<script>
import homeButton from '~/components/elements/homeButton.vue'
export default {
	name: "App",
	components: { homeButton }
}
</script>

<style lang="stylus">
@import "./assets/styles/index.styl"
.device
	height: 100vh
	width: 100vw
	// width: 320px
	// height: 580px
	// border: 1px solid #444
	margin: auto
	display: flex
	flex-direction: column
	position: relative
	.screen
		height: 100%
		width: 100%
		background: #000
	.buttom-side
		padding: 1em 0.3em
		border-top: 0.2em solid #262A2D	
</style>