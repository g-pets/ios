<template lang="pug">
.app-container
	.device
		.off-button(@click="tornOffDevice()")
		.front-side
			.top-side
				.speacker
			.screen.flex-column-container
				router-view(v-if="!deviceState.tornedOff")
			.buttom-side.section-fixed
				home-button
	footer
		small.credits Designed by 
			a(href="https://apple.com" rel="noopener" target="_blank") Apple 
			| in California.<br>
			| Assembled in Prague by 
			a(href="https://gololobov.dev" rel="noopener" target="_blank") Constantine Gololobov
			a.version(title="Github" href="https://github.com/gololobov-dev/iOS1" rel="noopener" target="_blank") version: 0.1.2

</template>

<script>
import { useRouter } from 'vue-router'
import HomeButton from '~/components/Misc/HomeButton.vue'
import deviceControl from "~/store/deviceState"
export default {
	components: { HomeButton },
	setup() {
		const { deviceState, tornOff } = deviceControl()
		const router = useRouter()
		const tornOffDevice = () => {
			tornOff()
			router.push({name: 'LockScreen'})
		}
		return { tornOffDevice, deviceState }
	}
}
</script>

<style lang="stylus">
@import "./assets/Styles"
.device
	display: flex
	flex-direction: column
	position: relative
	.screen
		height: 100%
		width: 100%
		background: #000
	.buttom-side
		padding: 1.1em 0.3em 1em

@media (max-width: 399px)
	.front-side
		display: flex
		flex-direction: column
		position: relative
		width: 100vw
		height: 100vh
		.screen
			border-bottom: 0.2em solid #262A2D
		.buttom-side
			background: #000
			position: relative
			z-index: 1000
			padding: 1.1em 0.3em 1em
	small.credits
		display: none


@media (min-width: 400px)
	.app-container
		display: flex
		flex-direction: column
		align-items: center
		width: 100vw
		min-height: 100vh
		padding: 1em
		@media (prefers-color-scheme: light)
			background: #fff
		@media (prefers-color-scheme: dark)
			background: #222
	footer
		margin-top: auto
		text-align: center
		small.credits
			display: block
			margin-top: 1em
			color: #777
			line-height: 1.3
			font-size: 0.75em
			transition: color .3s
			a
				color: inherit
			&:hover
				a
					text-decoration: underline
			.version
				display: block
				margin-top: 0.5em
		
	small.credits:hover
		@media (prefers-color-scheme: light)
			color: #000
		@media (prefers-color-scheme: dark)
			color: #fff
			
	.device
		width: max-content
		border-radius: 4em
		background: url("/img/ui/device-frame.jpg"), #aaa
		background-size: cover
		// background: linear-gradient(90deg, #B8BBC0 0%, #50595E 0.7%, #121D23 0.7%, #0F1A1E 1.8%, #666 1.8%, #B0B9BE 3.7%, #ddd 3.9%, #E9F0F6 5%, #E9F0F6 95%, #ddd 96.1%, #B0B9BE 96.3%, #666 98.2%, #0F1A1E 98.2%, #121D23 99.3%, #50595E 99.3%, #B8BBC0 100%)
		padding: 1em 1.2em 1.2em
		margin: auto
		position: relative
		.off-button
			width: 4.3em
			height: 1em
			position: absolute
			top: -0.7em
			right: 3.7em
			cursor: pointer
			&:hover
				&:after
					background: #000
			&:active
				&:after
					height: 0.1em
			&:after
				content: ""
				width: 3.9em
				height: 0.2em
				transition: height .15s
				position: absolute
				bottom: 0.3em
				left: 0.2em
				background: linear-gradient(90deg, #0D1615 0%, #4F595B 30%, #4F595B 70%, #0C1115 100%)
				border-radius: 2px 2px 0 0

		.front-side
			background: linear-gradient(180deg, #1d1f21 0%, #061115 30%, #000000 100%)
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