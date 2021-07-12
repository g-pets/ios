<template lang="pug">
.app-container
	.device
		.off-button(@click="tornOff()")
		.front-side
			.top-side
				.speacker
			.screen.flex-column-container
				router-view
			.buttom-side.section-fixed
				home-button
//- .screenshot
</template>

<script>
import { useRouter } from 'vue-router'
import homeButton from '~/components/Buttons/HomeButton.vue'
import deviceControl from "~/store/deviceState"
export default {
	name: "App",
	components: { homeButton },
	setup() {
		const { deviceUnlocked } = deviceControl()
		const router = useRouter()
		const tornOff = () => {
			deviceUnlocked(false)
			router.push({name: 'lockScreen'})
		}
		return { tornOff }
	}
}
</script>

<style lang="stylus">
@import "./assets/styles/index.styl"
.screenshot
	position: absolute
	top: 21px
	left: 0
	right: 0
	width: 395px
	height: 740px
	z-index: 99999
	background: url("/temp/screens/device.jpg")
	background-size: cover
	opacity: 1
	margin: auto
.device
	display: flex
	flex-direction: column
	position: relative
	.screen
		height: 100%
		width: 100%
		background: #000
		// border-bottom: 0.2em solid #262A2D
	.buttom-side
		// background: #000
		// position: relative
		// z-index: 1000
		padding: 1.1em 0.3em 1em

@media (min-width: 400px)
	.app-container
		background: #fff
		display: flex
		width: 100vw
		min-height: 100vh
		padding: 2em
	.device
		width: max-content
		border-radius: 4em
		background: #ddd
		background: url("/temp/screens/device-frame.jpg")
		background-size: cover
		// background: linear-gradient(90deg, #B8BBC0 0%, #50595E 0.7%, #121D23 0.7%, #0F1A1E 1.8%, #666 1.8%, #B0B9BE 3.7%, #ddd 3.9%, #E9F0F6 5%, #E9F0F6 95%, #ddd 96.1%, #B0B9BE 96.3%, #666 98.2%, #0F1A1E 98.2%, #121D23 99.3%, #50595E 99.3%, #B8BBC0 100%)
		padding: 1em 1.2em 1.2em
		margin: auto
		position: relative
		.off-button
			width: 3.9em
			height: 0.1em
			background: linear-gradient(90deg, #0D1615 0%, #4F595B 30%, #4F595B 70%, #0C1115 100%)
			position: absolute
			top: -0.1em
			right: 3.9em
			border-radius: 2px 2px 0 0
			cursor: pointer
		.front-side
			background: linear-gradient(180deg, #202930 0%, #061115 30%, #000000 100%)
			padding: 0 0.7em
			border-radius: 3em
			overflow: hidden
			.screen
				outline: 0.3em solid #464F54
				width: 320px
				height: 480px
				margin: auto
				border-radius: 0.1em
			.top-side
				padding: 3em 0 2.9em
				.speacker
					width: 4.4em
					height: 0.8em
					background: radial-gradient(500% 340% at 50% 0%, #202528 20%, #CBCBCB 35%)
					padding: 0.2em
					border-radius: 1em
					margin: 0 auto
					position: relative
					&:after
						content: ''
						position: absolute
						width: 90%
						height: 60%
						top: 20%
						border-radius: 1em
						background: #282D31
						box-shadow: inset 0 0.1em 0.1em #000
</style>