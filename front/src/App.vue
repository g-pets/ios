<template lang="pug">
glyphs-set
.app-container
	.screen.loading(v-if="!ready")
		svg.apple-logo(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.46 162")
			path(d="M133.6 126.25a88.08 88.08 0 01-8.71 15.66c-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.2-2.12-9.97-3.17-14.34-3.17-4.58 0-9.5 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.93.21-9.84-1.96-14.74-6.52-3.13-2.73-7.05-7.4-11.74-14.04-5.03-7.08-9.17-15.29-12.4-24.65C1.73 106.68 0 96.88 0 87.4c0-10.85 2.35-20.22 7.04-28.07 3.7-6.3 8.61-11.27 14.76-14.92a39.7 39.7 0 0119.95-5.63c3.91 0 9.05 1.21 15.43 3.6 6.36 2.38 10.44 3.6 12.24 3.6 1.33 0 5.87-1.42 13.57-4.25 7.27-2.62 13.41-3.7 18.44-3.27 13.63 1.1 23.87 6.47 30.68 16.15-12.19 7.39-18.22 17.73-18.1 31 .11 10.34 3.86 18.94 11.23 25.77a36.9 36.9 0 0011.22 7.36c-.9 2.61-1.85 5.11-2.86 7.51zm-31.26-123c0 8.1-2.96 15.66-8.86 22.66-7.12 8.32-15.73 13.13-25.07 12.38-.12-.98-.19-2-.19-3.08 0-7.77 3.39-16.1 9.4-22.9 3-3.45 6.82-6.31 11.45-8.6 4.62-2.25 8.99-3.5 13.1-3.71.12 1.08.17 2.17.17 3.24z")
	.screen(v-else)
		//- .pixels
		systemDialog(
			v-if="needRefresh"
			title="Update available"
			content="New version of this App is available."
			:buttons="[{label: 'Cancel', method: cancelUpdate}, {label: 'Update', method: updateServiceWorker}]")
		status-bar
		.main
			router-view
	.phone-body
		.home-button(@click="goHome")
</template>

<script>
import {onMounted} from "vue"
import appState from "~/store/appState"
import { useRegisterSW } from "virtual:pwa-register/vue"
import glyphsSet from '~/components/svg/glyphs/glyphsSet.vue'
import statusBar from '~/components/ui/statusBar.vue'
import systemDialog from '~/components/ui/systemDialog.vue'
import install from '~/install.js'
export default {
	name: "App",
	components: {glyphsSet, statusBar, systemDialog},
	data() {
		return {
			ready: true
		}
	},
	methods: {
		goHome() {
			this.$router.push({name: 'homeScreen'})
		}
	},
	setup() {
		const initApp = install()
		const {runApp} = appState()
		const {offlineReady, needRefresh, updateServiceWorker} = useRegisterSW()
		const cancelUpdate = async() => {
			offlineReady.value = false
			needRefresh.value = false
		}
		onMounted(() => runApp())
		return {needRefresh, updateServiceWorker, cancelUpdate}
	}
};
</script>

<style lang="stylus">
@import "./assets/styles/index.styl"
.pixels
	position: absolute
	top: 0
	left: 0
	width: 100%
	height: 100%
	background: repeating-linear-gradient(transparent, transparent 1px, rgba(#000,0.1) 1px, rgba(#000,0.1) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(#000,0.1) 1px, rgba(#000,0.1) 2px)
	z-index: 999
	pointer-events: none
.app-container
	width: 100vw
	height: 100vh
	display: flex
	flex-direction: column
	.screen
		background: #000
		flex: 1 0 auto
		position: relative
		display: grid
		grid-template-columns: 1fr
		grid-template-rows: max-content 1fr auto
		grid-template-areas: 'header' 'main' 'footer'
		// width: 320px
		// height: 480px
		&.loading
			display: flex
			background: #fff
			svg.apple-logo
				margin: auto
				width: 4em
				height: auto
				fill: #aaa
	.main
		overflow: scroll
	.phone-body
		padding: 1em 0
		border-top: 0.2em solid #262A2D
		height: max-content
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