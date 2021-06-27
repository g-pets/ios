<template lang="pug">
.keypad(v-if="!calling")
	.phone-number {{$phoneNumber(number)}}
	button.key(v-for="key in keys" @click="addInt(key.val)")
		.val {{key.val}}
		.add(v-html="key.add")
	button.key.action(v-for="action in actions" :class="action.class" @click="action.action")
		glyph(v-if="action.glyph" :name="action.glyph")
		.label(v-if="action.label") {{action.label}}
.calling(v-else)
	.number {{$phoneNumber(number)}}
	button.end-call(@click="endCall()") End Call
		


//- .screenshot
</template>

<script>
import useStore from "~/store/store"
import {ref} from 'vue'
export default {
	name: "Keypad",
	data() {
		return {
			keys: [
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
			],
			actions: [
				{glyph: "add_contact", class: "add-contact"},
				{glyph: "phone_sharp", label: "Call", action: this.makeCall, class: "call"},
				{glyph: "back", action: this.removeInt, class: "back"},
			]
		}
	},
	setup() {
		document.title = "Keypad | iOS"
		const {createRecord} = useStore('calls')
		let number = ref("")
		let calling = ref("")
		
		function addInt(int) {
			if(number.value.length >= 8) return
			number.value += int
		}

		function removeInt() {
			if(!number.value.length) return
			const newNumber = number.value.slice(0, -1)
			number.value = newNumber
		}

		function makeCall() {
			if(!number.value.length) return
			createRecord({number: {number: number.value}})
			calling.value = true
		}

		function endCall() {
			calling.value = false
		}
		return {number, calling, addInt, removeInt, makeCall, endCall}
	}
}
</script>


<style lang="stylus" scoped>
@import "../../assets/styles/basic/mixins.styl"
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
	display: grid
	grid-template-columns: repeat(3, 1fr)
	grid-auto-rows: 1fr
	border: 0.5px solid #353c44
	width: 100%
	height: 100%
	.phone-number
		grid-column: 1/-1
		color: #fff
		background: #000
		font-size: 2.3em
		line-height: 1
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
		border: 0.5px solid #353c44
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
