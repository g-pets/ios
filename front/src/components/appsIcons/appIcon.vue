<template lang="pug">
.app-item(@click="openApp" :class="{soon}")
	svg.app-icon(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" :style="jiggleEffect")
		component.html-icon(:is="name")
	.app-title {{title}}
//- .app-item(@click="openApp")
//- 	img.app-icon.temp-icon(:src="`/temp/apps/${name}.png`")
//- 	.app-title {{title}}
</template>

<script>
import phoneApp from './icons/phoneApp.vue'
import textApp from './icons/textApp.vue'
import clockApp from './icons/clockApp.vue'

// Soon
import iPodApp from './icons/iPodApp.vue'
import notesApp from './icons/notesApp.vue'
import calendarApp from './icons/calendarApp.vue'
import settingsApp from './icons/settingApp.vue'
import calculatorApp from './icons/calculatorApp.vue'
import weatherApp from './icons/weatherApp.vue'
import stocksApp from './icons/stocksApp.vue'
import mapsApp from './icons/mapsApp.vue'
import mailApp from './icons/mailApp.vue'

export default {
	name: "appIcon",
	components: {phoneApp, textApp, clockApp, iPodApp, notesApp, calendarApp, calculatorApp, weatherApp, settingsApp, stocksApp, mapsApp, mailApp},
	props: {
		name: String,
		router: String,
		title: String,
		soon: Boolean
	},
	computed: {
		jiggleEffect() {
			let delay = this.randomNumber(50,750) / 100
			let duration = this.randomNumber(10,20)
			return `animation-delay: -.${delay}s; animation-duration: .${duration}s`
		},
	},
	methods: {
		openApp() {
			this.$router.push({name: this.router})
		},
		randomNumber(min, max) {
			return Math.round(Math.random() * (max - min) + min)
		}
	}
}
</script>

<style lang="stylus" scoped>
.app-item
	cursor: pointer
	text-align: center
	// &.soon
	// 	filter: saturate(0)
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
	
	:deep(.html-icon)
		width: 100rem
		height: 100rem
		.icon-body
			width: 100%
			height: 100%
		.icon-header
			height: 300px
		.icon-title
			color: #fff
			text-align: center
			font-size: 10em
			line-height: 1
			padding: 0.6em 0 0.3em
			font-family: Helvetica
			font-weight: bold
			text-shadow: 0px -0.05em 0 rgba(#000,.5)
		
		&.icon-glare
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