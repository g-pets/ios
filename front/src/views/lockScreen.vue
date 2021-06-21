<template lang="pug">
.view.view-lockscreen
	.top-panel.panel-glow
		.time {{date.time}}
		.date {{date.day}}
	.bottom-panel.panel-glow
		.slider
			.toggle
				svg.arrow(fill="none" viewBox="0 0 160 160")
					path(d="M6 54h81V26l67 54-67 54v-28H6V54z")
			.text slide to unlock
//- .screenshot
</template>

<script>
import {reactive, onMounted} from 'vue'
export default {
	name: "LockScreen",
	setup() {
		let date = reactive({time:'',day:''})
		const timeOptions = {hour12: false, hour: '2-digit', minute:'2-digit'}
		const dateOptions = {weekday: 'long', month: 'long', day: 'numeric'}

		function getTime() {
			let d = new Date()
			date.time = d.toLocaleTimeString('en-US', timeOptions)
			date.day = d.toLocaleDateString('en-US', dateOptions)
		}
		onMounted(() => {
			getTime()
			setInterval(getTime, 1000)
		})
		return {date}
	}
};
</script>

<style lang="stylus">
.screenshot
	position: absolute
	top: 0
	left: 0
	background-image: url("/screens/lockScreen.png")
	width: 100%
	height: 100%
	background-repeat: no-repeat
	background-size: contain
	opacity: 0.5
.view-lockscreen
	background-image: url("/img/wallpapers/002.png")
	width: 100%
	height: 100%
	background-repeat: no-repeat
	background-size: cover
	display: flex
	flex-direction: column
	.panel-glow
		background: linear-gradient(180deg, rgba(#aaa,0.8) 0%, rgba(#aaa,0.4) 49%, rgba(#000,0.6) 50%)
	.top-panel
		text-align: center
		text-shadow: 0px -0.05em 0 rgba(#000,.7)
		line-height: 1
		color: #fff
		padding: 1em 0
		.time
			font-size: 4em
			font-weight: 300
			letter-spacing: -0.03em
		.date
			font-size: 1em
			
	.bottom-panel	
		margin-top: auto
		width:100%
		padding: 1.3em 1.1em
		.slider
			overflow: hidden
			position: relative
			width: 100%
			max-width: 300px
			margin: auto
			padding: 0.2em
			background: linear-gradient(180deg, rgba(#000,0.8) 0%, rgba(#000,0.7) 49%, rgba(#000,0.4) 50%, rgba(#000,0.1) 100%)
			box-shadow: 0 0 0 1px rgba(#fff,0.2)
			border-radius: 0.6em
			.toggle
				height: 100%
				padding: 0.3em 1em
				display: inline-block
				background: linear-gradient(180deg, #FEFEFE 0%, #DDDDDD 49%, #CFCFCF 50%, #A1A1A1 100%)
				border-radius: 0.4em
				cursor: pointer
				.arrow
					width: 2.3em
					fill: #8b8b8b
					
			.text
				position: absolute
				pointer-events: none
				top: 0
				padding: 0.5em 0
				text-indent: 4em
				line-height: 1.2
				font-size: 1.5em
				font-weight: 300
				background: linear-gradient(left, #4d4d4d, 0.4, #4d4d4d, 0.5, white, 0.6, #4d4d4d, #4d4d4d)
				background: -webkit-gradient(linear,left top,right top,color-stop(0, #4d4d4d),color-stop(0.4, #4d4d4d),color-stop(0.5, white),color-stop(0.6, #4d4d4d),color-stop(1, #4d4d4d))
				-moz-background-clip: text
				-webkit-background-clip: text
				-moz-text-fill-color: transparent
				-webkit-text-fill-color: transparent
				animation: slidetounlock 5s infinite
				width: 200%
				-webkit-text-size-adjust: none
				white-space: nowrap
			@keyframes slidetounlock
				0%
					background-position: -320px 0
				100%
					background-position: 320px 0
</style>