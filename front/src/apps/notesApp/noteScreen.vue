<template lang="pug">
.app.note-screen
	navigation-bar(title="note" back="Notes" :background="['#875D52', '#51372F', '#3B2D21']")
		template(v-slot:btn)
			.add-note(@click="addNote") +
	//- .note(contenteditable @input="onInput") {{note}}
	
	.content
		.line
		.meta
			.day Today
			.date 4/13/15,
			.time 12:08 PM
		textarea.note(v-model="note")
</template>

<script>
import navigationBar from '~/components/ui/navigationBar.vue'
import {ref} from 'vue'
export default {
	name: "noteScreen",
	components: {navigationBar},
	methods: {
		onInput(e) {
			this.note = e.target.innerText
		},
	},
	setup() {
		let note = ref('')
		note.value = 'Hello World!'
		return {note}
	}
}
</script>

<style lang="stylus" scoped>
.note-screen
	background: #F8F79D
	color: #000
	

	.content
		// padding: 0.2em 0.5em 0.5em 1em
		// background: repeating-linear-gradient(#F8F79D, #F8F79D 30px, #C3C189 30px, #C3C189 31px)
		.line
			position: absolute
			width: 2px
			min-height: 100vh
			height: 100%
			background: rgba(red, 0.2)
			top: 0
			left: 1.3em
	.meta
		display: flex
		color: #994B38
		
		padding: 0.2em 0.5em 0.5em 1.6em
		.day
			font-weight: bold
		.date
			margin-left: auto
		.time
			margin-left: 0.4em
	textarea.note
		padding: 1em
		padding: 0.2em 0.5em 0.5em 1.6em
		font-family: "Noteworthy"
		font-size: 20px
		font-weight: bold
		line-height: 30px
		width: 100%
		min-height: 80vh
		background: transparent
		resize: none
		border: none
		color: #060701
		background-attachment: local
		background: repeating-linear-gradient(#F8F79D, #F8F79D 30px, #C3C189 30px, #C3C189 31px)
		&:focus
			outline: none
</style>