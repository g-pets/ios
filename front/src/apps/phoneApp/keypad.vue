<template lang="pug">
.keypad(v-if="!calling")
	.number {{number}}
	.num-grid
		button.key(v-for="key in keys" @click="addInt(key.val)")
			.val {{key.val}}
			.add {{key.add}}
		button.key.action(v-for="action in actions" :class="action.class" @click="action.action")
			glyph(v-if="action.glyph" :name="action.glyph")
			.label(v-if="action.label") {{action.label}}
.calling(v-else)
	.number {{number}}
	button.end-call(@click="endCall()") End Call
		


//- .screenshot
</template>

<script>
export default {
	name: "Keypad",
	data() {
		return {
			number: "",
			calling: false,
			keys: [
				{val: "1"},
				{val: "2", add: "ABC"},
				{val: "3", add: "DEF"},
				{val: "4", add: "GHI"},
				{val: "5", add: "JKL"},
				{val: "6", add: "MNO"},
				{val: "7", add: "PQRS"},
				{val: "8", add: "TUV"},
				{val: "9", add: "WXYZ"},
				{val: "*"},
				{val: "0", add: "+"},
				{val: "#"},
			],
			actions: [
				{glyph: "add_contact", class: "add-contact"},
				{glyph: "phone_sharp", label: "Call", action: this.makeCall, class: "call"},
				{glyph: "back", action: this.removeInt, class: "back"},
			]
		}
	},
	methods: {
		addInt(int) {
			if(this.number.length >= 14) return
			this.number += int
		},
		removeInt() {
			if(!this.number.length) return
			const newNumber = this.number.slice(0, -1)
			this.number = newNumber
		},
		makeCall() {
			if(!this.number.length) return
			this.calling = true
		},
		endCall() {
			this.calling = false
		}
	}
}
</script>


<style lang="stylus" scoped>
.screenshot
	position: absolute
	top:20px
	left: 1px
	background-image: url("/screens/phoneApp_keypad.png")
	width: 100%
	height: 100%
	background-repeat: no-repeat
	background-size: contain
	z-index: 3
	opacity: 1
	// opacity: 0.5
.keypad
	.number
		color: #fff
		background: #000
		font-size: 2.3em
		min-height: 74px
		line-height: 1
		padding: 0.55em 0.2em 0.45em
		text-align: center
		background: linear-gradient(180deg, #687b95 0%, #254167 50%, #0b2a55 50%, #0b2a55 100%)
	.num-grid
		display: grid
		grid-template-columns: repeat(3, 1fr)
		border: 0.5px solid #353c44
		width: 100%
		height: 100%
		.key
			text-align: center
			line-height: 1
			padding: 0.75em 0 0.55em
			cursor: pointer
			font-weight: bold
			border: 0.5px solid #353c44
			background: linear-gradient(180deg, #1e252f 0%, #151c26 50%, #0e1520 100%)
			display: flex
			flex-direction: column
			align-items: center
			justify-content: flex-start
			&:hover
				background: linear-gradient(180deg, #27303d 0%, #1d2735 50%, #151f30 100%)
			&:active
				background: linear-gradient(180deg, #4c96f5 0%, #226be4 100%)
			.val
				font-size: 2.1em
				color: #fff
			.add
				font-size:0.8em
				color: rgba(#fff,0.5)
		.key.action
			color: #fff
			background: linear-gradient(180deg, #213046 0%, #051831 50%, #0f1620 100%)
			display: flex
			flex-direction: row
			align-items: center
			justify-content: center
			padding: 1.2em 0 1em
			&.add-contact, &.back
				padding: 0.9em 0
				svg.icon
					width: 2.25em
					height: 2.25em
					fill: rgba(#fff,0.7)

			&.call
				background: linear-gradient(180deg, #9ace96 0%, #40b23b 50%, #21a11b 50%, #27aa1e 100%)
				svg.icon
					margin-top: -0.3em
					width: 1.5em
					height: 1.5em
					fill: #fff
					filter: drop-shadow(0 -1px 0 rgba(#000,.5))
				.label
					margin-left: 0.2em
					font-size: 1.6em
					text-shadow: 0px -0.05em 0 rgba(#000,.5)
.calling
	position: absolute
	top: 0
	left: 0
	width: 100%
	height: 100%
	background: #000
	background-image: url("/img/wallpapers/planet.jpg")
	background-size: cover
	background-position: center
	z-index: 100
	display: flex
	flex-direction: column
	align-items: center
	justify-content: space-between
	padding: 2.5em 1em 2em
	.number
		color: #fff
		background: #000
		font-size: 2.3em
		line-height: 1
	.end-call
		margin-top: auto
		padding: 0.5em 1em
		color: #fff
		background: #333
		border-radius: 0.5em
</style>
