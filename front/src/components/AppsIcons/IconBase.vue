<template lang="pug">
.app-item(@click="openApp")
	.notification(v-if="ready") 1
	svg.app-icon(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000")
		foreignObject(x="0" y="0" width="1000" height="1000")
			component(:is="icon" xmlns="http://www.w3.org/2000/xmlns/")
	.app-title {{title}}
</template>


<script>
import IconPhoneApp from "./IconPhoneApp.vue"
import IconTextApp from "./IconTextApp.vue"
import IconiPodApp from "./IconiPodApp.vue"
import IconCalculatorApp from "./IconCalculatorApp.vue"
import IconWeatherApp from "./IconWeatherApp.vue"
import IconSettingsApp from "./IconSettingsApp.vue"
import IconStocksApp from "./IconStocksApp.vue"
import IconMapsApp from "./IconMapsApp.vue"

// Not Optimized
import IconClockApp from "./IconClockApp.vue"
import IconNotesApp from "./IconNotesApp.vue"
import IconCalendarApp from "./IconCalendarApp.vue"
import IconMailApp from "./IconMailApp.vue"
import IconSafariApp from "./IconSafariApp.vue"
import IconPhotosApp from "./IconPhotosApp.vue"
import IconCameraApp from "./IconCameraApp.vue"
import IconYouTubeApp from "./IconYouTubeApp.vue"

export default {
	components: {
		IconPhoneApp,
		IconTextApp,
		IconiPodApp,
		IconCalculatorApp,
		IconWeatherApp,
		IconSettingsApp,
		IconStocksApp,
		IconMapsApp,
		IconClockApp,
		IconNotesApp,
		IconCalendarApp,
		IconMailApp,
		IconSafariApp,
		IconPhotosApp,
		IconCameraApp,
		IconYouTubeApp
	},
	props: {
		icon: String,
		title: String,
		route: String,
		ready: Boolean
	},
	methods: {
		openApp() {
			this.$router.push({name: this.route})
		}
	}
}
</script>


<style lang="stylus" scoped>
.app-item
	cursor: pointer
	text-align: center
	position: relative
	.notification
		width: 1.3em
		height: 1.3em
		background: red
		position: absolute
		z-index: 2
		top: -0.4em
		right: -0.4em
		border-radius: 50%
		padding: 0.15em
		border: 0.1em solid #FBF6FA
		box-shadow: 0 0.06em 0.07em 0.01em rgba(#000,0.6)
		fill: #fff
		line-height: 0.85
		font-weight: bold
		color: #fff
	@-moz-document url-prefix()
		.notification
			line-height: 1
	.app-icon
		width: 100%
		overflow: hidden
		border-radius: 0.7em
		position: relative
	.app-title
		margin-top: 0.5em
		font-size: 0.7em
		color: #ccc
		line-height: 1
.app-icon
	width: 100%
	:deep(foreignObject)
		width: 100rem
		height: 100rem
		.icon-body
			width: 100%
			height: 100%
			// border-radius: 10em
			// overflow: hidden
			.content-header
				height: 300px
				.title
					color: #fff
					text-align: center
					font-size: 9.5em
					line-height: 1
					padding: 0.6em 0 0.3em
					font-family: Helvetica
					font-weight: bold
					text-shadow: 0px -0.05em 0 rgba(#000,.4)
		.glossy
			position: relative
			&:before
				content: ''
				position: absolute
				top: 0
				left: 0
				width: 100%
				height: 53%
				border-radius: 0 0 70% 70%/0 0 45% 45%
				background: linear-gradient(180deg, rgba(#fff, .75) 0%, rgba(#fff, .15) 100%)
</style>