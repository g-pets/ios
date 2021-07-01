<template lang="pug">
.view.view-lockscreen
	.top-panel.panel-glow
		.time {{ dateTime.time }}
		.date {{ dateTime.date }}
	.bottom-panel.panel-glow
		slideToUnlock
</template>

<script>
import { dateTime } from "~/store/appState"
import slideToUnlock from "~/components/elements/slideToUnlock.vue"
export default {
	name: "LockScreen",
	components: { slideToUnlock },
	setup() {
		return {dateTime}
	}
};
</script>

<style lang="stylus">
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