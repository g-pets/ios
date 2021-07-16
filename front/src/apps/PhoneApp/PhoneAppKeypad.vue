<template lang="pug">
.app-view.phone-app-keypad.section-scrolled
	.phone-number {{$phoneNumber(phoneNumber)}}
	button.key(v-for="key in keys" @click="addInt(key.val)")
		.val {{key.val}}
		.add(v-html="key.add")
	button.key.action(v-for="action in actions" :class="action.class" @click="action.action")
		glyph(v-if="action.glyph" :name="action.glyph")
		.label(v-if="action.label") {{action.label}}
</template>


<script>
import { ref } from "vue"
import AppFunctions from "~/core/AppFunctions"
export default {
	setup() {
		document.title = "Phone App - Keypad | iOS"
		const { callContact } = AppFunctions()
		const phoneNumber = ref("")
		const makeCall = () => {
			callContact(phoneNumber.value)
		}
		const addInt = (int) => {
			if(phoneNumber.value.length > 9) return
			phoneNumber.value += int
		}
		const removeInt = () => {
			if(!phoneNumber.value.length) return
			const newNumber = phoneNumber.value.slice(0, -1)
			phoneNumber.value = newNumber
		}
		const keys = [
				{val: "1", add: "&nbsp;"},
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
			]
		const actions = [
				{glyph: "add_contact", class: "add-contact"},
				{glyph: "phone_sharp", label: "Call", action: makeCall, class: "call"},
				{glyph: "back", action: removeInt, class: "back"},
			]

		return { phoneNumber, keys, actions, addInt, removeInt, makeCall }
	}
}
</script>


<style lang="stylus" scoped>
@import "../../assets/styles/mixins.styl"
.phone-app-keypad
	display: grid
	grid-template-columns: repeat(3, 1fr)
	grid-auto-rows: 1fr
	border-left: 1px solid #353c44
	border-right: 1px solid #353c44
	width: 100%
	height: 100%
	.phone-number
		grid-column: 1/-1
		color: #fff
		background: #000
		font-size: 2.3em
		line-height: 1
		min-height: 1.5em
		text-align: center
		background: linear-gradient(180deg, #687b95 0%, #254167 50%, #0b2a55 50%, #0b2a55 100%)
		display: flex
		align-items: center
		justify-content: center
	.key
		text-align: center
		line-height: 1
		padding: 0.75em 0 0.55em
		cursor: pointer
		font-weight: bold
		outline: 1px solid #353c44
		display: flex
		flex-direction: column
		align-items: center
		justify-content: center
		$keyBtn1 = #1e252f
		$keyBtn2 = #151c26
		$keyBtn3 = #0e1520
		gradient-v3($keyBtn1, $keyBtn2, $keyBtn3)
		&:hover
			gradient-v3(lighten($keyBtn1,5), lighten($keyBtn2,5), lighten($keyBtn3,5))
		&:active
			gradient-v2(#4c96f5,#226be4)
		.val
			font-size: 2.1em
			color: #fff
		.add
			font-size:0.8em
			color: rgba(#fff,0.5)
	.key.action
		$keyBtnAction1 = #213046
		$keyBtnAction2 = #051831
		$keyBtnAction3 = #0f1620
		gradient-v3($keyBtnAction1, $keyBtnAction2, $keyBtnAction3)
		color: #fff
		display: flex
		flex-direction: row
		align-items: center
		justify-content: center
		padding: 1.2em 0 1em
		&:hover
			gradient-v3(lighten($keyBtnAction1,5), lighten($keyBtnAction2,5), lighten($keyBtnAction3,5))
		&:active
			gradient-v3(lighten($keyBtnAction1,10), lighten($keyBtnAction2,10), lighten($keyBtnAction3,10))
		&.add-contact, &.back
			padding: 0.9em 0
			svg.icon
				width: 2.25em
				height: 2.25em
				fill: rgba(#fff,0.7)
		&.call
			$callBtn1 = #9ace96
			$callBtn2 = #40b23b
			$callBtn3 = #21a11b
			$callBtn4 = #27aa1e
			gradient-v50($callBtn1, $callBtn2, $callBtn3, $callBtn4)
			&:hover
				gradient-v50(lighten($callBtn1,3), lighten($callBtn2,3), lighten($callBtn3,3), lighten($callBtn4,3))
			&:active
				gradient-v50(lighten($callBtn1,7), lighten($callBtn2,7), lighten($callBtn3,7), lighten($callBtn4,7))
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
</style>
