<template lang="pug">
.keyboard-layer.section-fixed
	.input-container
		.input-filed(contenteditable @click.stop.prevent) {{message}}
		//- textarea.input-filed(type="text" inputmode="none" v-model="message")
		button.send Send
	.keys-container
		.row.top-row
			button.key.variants.dark-text__shadow(v-for="key in qwerty.topRow" @click.self="pressKey(key)" :data-key="key") {{key}}
		.row.middle-row
			button.key.variants.dark-text__shadow(v-for="key in qwerty.middleRow" @click="pressKey(key)" :data-key="key") {{key}}
		.row.bottom-row
			button.key.action-key.caps
				glyph(name="shift")
			button.key.variants.dark-text__shadow(v-for="key in qwerty.bottomRow" @click="pressKey(key)" :data-key="key") {{key}}
			button.key.action-key.back(@click="deleteChar()")
				glyph(name="back_keyboard")
		.row.action-keys
			button.key.action-key.chars.light-text__shadow .?123
			button.key.action-key.space.dark-text__shadow(@click="pressSpace()") space
			button.key.action-key.return.light-text__shadow return
	//- .screenshot
</template>

<script>
import { ref } from 'vue'
export default {
	name: "Keyboard",
	setup() {
		const qwerty = {
			topRow: ["Q","W","E","R","T","Y", "U", "I", "O", "P"],
			middleRow: ["A","S","D","F","G","H", "J", "K", "L"],
			bottomRow: ["Z","X","C","V","B","N", "M"]
		}
		const message = ref('')
		function pressKey(key) {
			message.value += key
		}
		function pressSpace() {
			message.value += ' '
		}
		function deleteChar() {
			if(!message.value.length) return
			const newMessage = message.value.slice(0, -1)
			message.value = newMessage
		}
		return { qwerty, pressKey, pressSpace, deleteChar, message }
	}
}
</script>

<style lang="stylus">
@import "../../assets/styles/basic/mixins.styl"
.screenshot
	position: absolute
	bottom: 0px
	left: 1px
	background-image: url("/temp/screens/keyboard.jpg")
	width: 320px
	height: 480px
	background-repeat: no-repeat
	background-size: contain
	z-index: 3000
	opacity: 1
	opacity: 0.2
	pointer-events: none


.keyboard-layer
	position: relative
	.input-container
		width: 100%
		padding: 0.4em
		display: flex
		align-items: flex-end
		gradient-v3(#E9E9EA, #CDCDD1, #C3C5C9)
		// border-top: 0.1em solid #F4F5F5
		box-shadow: inset 0 0.1em 0 rgba(#fff,0.4), 0 -0.1em 0 rgba(#000,0.1)
		.input-filed
			width: min-content
			font-size: 1em
			line-height: 1.1
			inline-size: 0
			overflow: hidden
			overflow-wrap: break-word
			flex: 1 0 auto
			background: #F7F7F7
			padding: 0.25em 0.8em 0.05em
			border-radius: 0.8em
			color: #222
			margin-right: 0.3em
			box-shadow: inset 0 0.1em 0.2em rgba(#000,0.4)
			border: 0.1em solid #aaa
			&:focus
				outline: none
			// &:after
			// 	display: inline-block
			// 	content: ""
			// 	margin-left: 0.2em
			// 	margin-top: 0.5em
			// 	width: 0.2em
			// 	height: 0.8em
			// 	background: #444
		textarea
			resize: none
			height: auto
				
		button.send
			flex: 0 0 auto
			font-size: 0.95em
			gradient-v50(#85A2CA, #6086CD, #3865AE, #3762A6)
			box-shadow: inset 0 -0.07em 0 rgba(#fff,0.8), inset 0 0.07em 0 rgba(#000,0.2)
			color: #fff
			font-weight: bold
			line-height: 1
			letter-spacing: 0.03em
			padding: 0.3em 0.8em 0.3em
			border-radius: 1em
	.keys-container
		width: 100%
		gradient-v3(#9198A2, #6D7582, #444D5C)
		border-top: 0.08em solid #555
		box-shadow: inset 0 0.1em 0 rgba(#fff,0.4)
		padding: 0.8em 0.2em 0.3em
		position: relative
		&:after
			content: ""
			position: absolute
			width: 100%
			height: 100%
			top: 0
			left: 0
			gradient-v2(rgba(#000,0), rgba(#000,0.1))
			pointer-events: none
		.row
			display: flex
			justify-content: center
			gap: 0.32em
			+ .row
				margin-top: 1em
			&.bottom-row, &.action-keys
				justify-content: space-between
		.key
			font-size: 1.4em
			flex: 0 0 auto
			text-align: center
			color: #000
			font-weight: bold
			line-height: 1
			min-width: 1.2em
			gradient-v2(#FDFDFD, #DFE1E3)
			padding: 0.4em 0.1em 0.27em
			border-radius: 0.2em
			box-shadow: 0 0.1em 0.1em rgba(#000,0.4)
			cursor: pointer
			position: relative
			
			&.variants
				&:active
					&:after
						display: block
				&:after
					display: none
					content: attr(data-key)
					position: absolute
					gradient-v3(#FAFAFA, #D3D4D5, #D5D7D9)
					width: 120%
					height: 200%
					bottom: 0
					left: -10%
					font-size: 1.5em
					text-align: center
					border-radius: 0.1em
					padding: 0.3em 0
					box-shadow: 0 0.1em 0.1em rgba(#000,0.2)
			&.action-key
				gradient-v2(#8b92a0, #586170)
				color: #F0F4F5
				font-size: 1.1em
				padding: 0.6em 0.6em 0.5em
				&.caps, &.back
					padding: 0em 0.2em
					gradient-v2(#a0a8b2, #727b89)
					svg
						width: 1.6em
						height: 1.6em
						fill: #F4F4F2
						filter: drop-shadow(0 -1px 0 rgba(#000,.5))
				&.caps
					margin-right: 0.4em
					padding: 0.1em 0.25em 0.3em
					svg
						padding: 0.1em
				&.back
					margin-left: 0.3em
				&.chars
					padding: 0.6em 0.8em 0.5em
				&.space
					flex: 1 0 auto
					gradient-v2(#e8ebed, #bdc2c9)
					color: #585F65
</style>