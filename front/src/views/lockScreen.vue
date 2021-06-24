<template lang="pug">
.view.view-lockscreen
	.top-panel.panel-glow
		.time {{dateTime.time}}
		.date {{dateTime.date}}
	.bottom-panel.panel-glow
		//- p {{unlockProgress}}
		//- input.slide(type="range" min="0" max="10" step="0.01" v-model.number="unlockProgress")
		slideToUnlock
		//- .slider
			.toggle(@mousemove="dragMoving" @mouseup="dragFinish" @touchmove="dragMoving" @touchend="dragFinish")
				svg.arrow(fill="none" viewBox="0 0 160 160")
					path(d="M6 54h81V26l67 54-67 54v-28H6V54z")
			.text slide to unlock
//- .screenshot
</template>

<script>
import {dateTime} from "~/store/appState"
import slideToUnlock from "~/components/ui/_slideToUnlockRaw.vue"
export default {
	name: "LockScreen",
	components: {slideToUnlock},
	setup() {
		return {dateTime}
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
	background-position: center
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
</style>