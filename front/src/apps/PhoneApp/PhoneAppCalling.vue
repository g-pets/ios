<template lang="pug">
.view-calling.waiting
	.top-panel
		.calling-contact
			.number.dark-text-shadow {{$phoneNumber(phoneNumber)}}
			.state calling mobile...
	.control-panel.glare
		.cell(v-for="key in keys" :class="key.class")
			glyph(:name="key.glyph")
			.label {{key.label}}
	.bottom-panel
		.button-cell
			button.end-call(@click="endCall()")
				glyph(name="phone_end_call")
				.label.dark-text-shadow End Call
</template>


<script>
import { computed } from "vue"
import { useRouter, useRoute } from "vue-router"
export default {
	setup() {
		document.title = "Phone App - Calling | iOS"
		const router = useRouter()
		const route = useRoute()
		const keys = [
			{label: "mute", glyph: "mute", class: "mute"},
			{label: "keypad", glyph: "keypad_rouded", class: "keypad"},
			{label: "speaker", glyph: "speaker", class: "speaker"},
			{label: "add call", glyph: "plus_rounded", class: "add-call"},
			{label: "hold", glyph: "hold", class: "hold"},
			{label: "contacts", glyph: "contacts", class: "contacts"},
		]
		const phoneNumber = computed(() => route.params.number)
		const endCall = () => router.push({name: "PhoneAppKeypad"})
		return { keys, phoneNumber, endCall }
	}
}
</script>


<style lang="stylus" scoped>
@import "../../assets/styles/basic/mixins.styl"
.view-calling
	position: absolute
	top: 0
	left: 0
	z-index: 5
	width: 100%
	height: 100%
	background: #000
	background-image: url("/img/wallpapers/planet.webp")
	background-size: cover
	background-position: center
	display: flex
	flex-direction: column
	justify-content: space-between
	.top-panel
		gradient-v50(#353535, #181818, #030303, #000000)
		border-bottom: 1px solid #222
		padding: 1em 1em 0.4em
		display: flex
		.calling-contact
			.number
				color: #fff
				font-size: 1.7em
				line-height: 1
			.state
				margin-top: 0.45em
				font-size: 1.4em
		.photo
			margin-left: auto
			flex: 0 0 auto
			width: 4em
			height: 4em
			border-radius: 0.3em
			background: #444
	.control-panel
		font-size: 0.8em
		width: 85%
		max-width: 30rem
		margin: auto
		overflow: hidden
		display: grid
		grid-template-columns: repeat(3, 1fr)
		grid-auto-rows: 1fr
		border-radius: 1rem
		background: rgba(#000,0.8)
		box-shadow: inset 0 0 0 0.1em rgba(#fff,.4)
		&:before
			height: 35%
			background: linear-gradient(180deg, rgba(#fff, .2) 0%, rgba(#fff, .1) 100%)
		.cell
			padding: 1.5em 0.5em
			text-align: center
			box-shadow: 1px 1px 0 rgba(#fff,.1), inset -1px -1px 0 rgba(#000,.6)
			&:nth-child(3) // 3 - only bottom side border
				box-shadow: 0 1px 0 rgba(#fff,.1), inset 0 -1px 0 rgba(#000,.6)
			&:nth-child(1n+4) // 4,5,6 - only right side border 
				box-shadow: 1px 0 0 rgba(#fff,.1), inset -1px 0 0 rgba(#000,.6)
			&:nth-child(6)
				box-shadow: none
			svg.icon
				width: 3.6em
				height: 3.6em
				fill: #fff
			&:hover
				background: rgba(#000,0.9)
		.cell
			&.keypad
				svg.icon
					padding: 0.4em
			&.add-call
				svg.icon
					padding: 0.1em 0 0.6em
			&.hold
				svg.icon
					padding: 0.2em 0 0.6em
			&.contacts
				svg.icon
					padding: 0 0 0.5em
	.bottom-panel
		gradient-v50(#353535, #181818, #030303, #000000)
		padding: 1.3em
		border-top: 1px solid #484848
		.button-cell
			max-width: 30rem
			margin: auto
			gradient-v3(#040404, #0E0C0E, #202221)
			border: solid 0.5px #444
			border-top: 0
			padding: 0.3rem
			border-radius: 1rem
			button
				$endCallBtn1 = #B3727E
				$endCallBtn2 = #9E242B
				$endCallBtn3 = #9C1C20
				$endCallBtn4 = #962429
				font-size: 1.5em
				width: 100%
				padding: 0
				border-radius: 1rem
				box-shadow: inset 0px 1px 0 rgba(#fff,0.3)
				gradient-v50($endCallBtn1, $endCallBtn2, $endCallBtn3, $endCallBtn4)
				&:hover
					gradient-v50(lighten($endCallBtn1,3), lighten($endCallBtn2,3), lighten($endCallBtn3,3), lighten($endCallBtn4,3))
				&:active
					gradient-v50(lighten($endCallBtn1,7), lighten($endCallBtn2,7), lighten($endCallBtn3,7), lighten($endCallBtn4,7))			
				svg.icon, .label
					display: inline-block
				svg.icon
					fill: #fff
					width: 1.65em
					height: 1.65em
					margin-right: 0.35em
				.label
					font-weight: bold
					color: #FFFAFE
					line-height: 1.2
					margin-top: 0.4em
	&.waiting
		.control-panel
			.cell
				svg.icon
					fill: rgba(#888,0.7)
					color: #B1B6B0
				&.speaker, &.contacts
					svg.icon
						fill: #fff
						color: #fff
</style>
