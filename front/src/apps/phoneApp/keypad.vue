<template lang="pug">
.keypad
	.number {{number}}
	.num-grid
		button.key(v-for="key in keys" @click="addInt(key.val)")
			.val {{key.val}}
			.add {{key.add}}
		button.key.action(v-for="action in actions" :class="action.class" @click="action.action")
			glyph(v-if="action.glyph" :name="action.glyph")
			.label(v-if="action.label") {{action.label}}

//- .screenshot
</template>

<script>
export default {
	name: "Keypad",
	data() {
		return {
			number: "",
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
				{glyph: "wifi"},
				{glyph: "phone", label: "Call", class: "call"},
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
			justify-content: center
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
			&.call
				background: linear-gradient(180deg, #9ace96 0%, #40b23b 50%, #21a11b 50%, #27aa1e 100%)
				svg.icon
					width: 1.4em
					height: 1.4em
					fill: #fff
				.label
					margin-left: 0.3em
					font-size: 1.6em
					text-shadow: 0px -0.05em 0 rgba(#000,.5)
			&.back
				padding: 0.9em 0
				svg.icon
					width: 2.3em
					height: 2.3em
					fill: rgba(#fff,0.7)
</style>
