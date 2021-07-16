<template lang="pug">
.app.calculator-app.section-scrolled
	.display {{display}}
	.keys
		button.key(v-for="key in keys" @click="pressKey(key)" :class="[key.class, {holded:key.holded}]")
			glyph(v-if="key.glyph" :name="key.glyph")
			.val.light-text__shadow(v-else)
				.label {{key.val}}
				.label(v-if="key.val2") {{key.val2}}
</template>


<script>
import { ref, reactive } from "vue"
export default {
	setup() {
		document.title = "Calculator App | iOS"
		let display = ref("")
		const keys = reactive([
			{val: "m+", action: "memory", class: "memory"},
			{val: "m-", class: "memory"},
			{val: "mr", val2: "mc", class: "memory"},
			{val: "/", type: "operator", class: "", glyph: "divide_calc"},
			{val: "7", type: "number", class: "number"},
			{val: "8", type: "number", class: "number"},
			{val: "9", type: "number", class: "number"},
			{val: "*", type: "operator", class: "", glyph: "multyply_calc"},
			{val: "4", type: "number", class: "number"},
			{val: "5", type: "number", class: "number"},
			{val: "6", type: "number", class: "number"},
			{val: "+", type: "operator", class: "", glyph: "plus_calc"},
			{val: "1", type: "number", class: "number"},
			{val: "2", type: "number", class: "number"},
			{val: "3", type: "number", class: "number"},
			{val: "-", type: "operator", class: "", glyph: "minus_calc"},
			{val: "0", type: "number", class: "number"},
			{val: ".", class: "dot"},
			{val: "c", type: "clear"},
			{val: "=", type: "equals", class: "equals", glyph: "equals_calc"},
		])
		
		const pressKey = (key) => {
			switch (key.type) {
				case "number":
					display.value += key.val
					break
				case "clear":
					clear()
					break
				case "operator":
					// key.holded = true
					display.value += key.val
					break
				case "equals":
					equals()
					break
				default:
					console.log("Default")
			}
		}

		const clear = () => display.value = ""
		const equals = () =>  {
			let result = Function('"use strict";return (' + display.value + ')')()
			display.value = result.toFixed(5) - 0
		}
		return { display, keys, pressKey }
	}
}
</script>


<style lang="stylus" scoped>
.app.calculator-app
	background: #181918
	display: flex
	flex-direction: column
	.display
		width: 100%
		min-height: 1.2em
		color: #0F4564
		font-size: 4.7em
		line-height: 1
		letter-spacing: -0.02em
		background: linear-gradient(180deg, #EBF5FB 0%, #AEE1FA 50%, #92D0EF 50%, #C5E7F5 100%)
		display: flex
		align-items: center
		justify-content: flex-end
		padding: 0.17em 0.1em 0.01em
		flex: 1 0 auto
	.keys
		display: grid
		grid-template-columns: repeat(4, 1fr)
		grid-auto-rows: 1fr
		column-gap: 1.7em
		row-gap: 1.2em
		padding: 1em
		&:before
			content: ''
			width: 0
			padding-bottom: 100%
			grid-row: 1 / 1
			grid-column: 1 / 1
		& > *:first-child
			grid-row: 1 / 1
			grid-column: 1 / 1
	button
		margin: auto
		width: 100%
		height: 100%
		background: #705E54
		border-radius: 50%
		border: 1px solid #373737
		position: relative
		overflow: hidden
		font-size: 1.9em
		font-weight: bold
		color: #FEFEFE
		display: flex
		align-items: center
		justify-content: center
		&.memory
			background: #61666A
			.val
				text-align: left
				font-size: 0.6em
				line-height: 0.7
		&.number
			background: #191919
		&.equals
			background: #EC791D
		&.dot
			font-family: Georgia, 'Times New Roman', Times, serif
		&.holded
			box-shadow: inset 0 0 0 0.1em #fff
		&:hover
			&:after
				opacity: 0.3
		&:active
			&:after
				opacity: 1
		svg
			width: 0.6em
			height: 0.6em
			fill: #FEFEFE
			filter: drop-shadow(0 -0.03em 0 rgba(#000,.4))
		&:before, &:after
			content: ''
			position: absolute
			left: 0
			right: 0
			width: 100%
			height: 100%
		&:before
			top: -50%
			border-radius: 50%
			background: linear-gradient(180deg, rgba(#fff, .4) 0%, rgba(#fff, .1) 100%)
		&:after
			top: 0
			opacity: 0
			transition: opacity .15s
			background: radial-gradient(50% 50% at 50% 50%, rgba(#fff, 0.9) 5%, rgba(#fff, 0) 100%)
</style>