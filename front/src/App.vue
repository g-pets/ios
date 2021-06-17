<template lang="pug">
glyphs-set
.app-container
	.screen
		template(v-if="!ready")
			status-bar
			.main
				router-view
	.phone-body
		.home-button(@click="goHome")
</template>

<script>
import glyphsSet from '~/components/svg/glyphs/glyphsSet.vue'
import statusBar from '~/components/ui/statusBar.vue'
export default {
	name: "App",
	components: {glyphsSet, statusBar},
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
	
	// .status-bar
	
	.screen
		background: #000
		min-height: 480px
		display: grid
		grid-template-columns: 1fr
		grid-template-rows: max-content 1fr auto
		grid-template-areas: 'header' 'main' 'footer'
	.main
		overflow: scroll
		// height: 46rem
	.phone-body
		padding: 1em
		border-top: 5px solid #262A2D
		.home-button
			margin: auto
			display: block
			cursor: pointer
			width: 7rem
			height: 7rem
			position: relative
			border-radius: 50%
			overflow: hidden
			background: linear-gradient(180deg, rgba(#fff, 0.02) 50%, rgba(#fff, 0.3) 100%)
			box-shadow: 0 -1px 0 #222
			// outline: 1px solid #222
			&:before, &:after
				content: ''
				position: absolute
				top: 0
				left: 0
			&:before
				margin: auto
				border-radius: 0.3em
				border: 1px solid #999
				width: 30%
				height: 30%
				right: 0
				bottom: 0
				z-index: 1
			&:after
				width: 100%
				height: 75%
				background: #000
				border-radius: 50% 50% 50% 50%/50% 50% 25% 25%
					
				
</style>