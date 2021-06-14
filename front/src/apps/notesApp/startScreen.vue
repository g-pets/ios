<template lang="pug">
.app.notes-app
	navigation-bar(:title="`Notes (${notes.length})`" :background="['#875D52', '#51372F', '#3B2D21']")
		template(v-slot:btn)
			.add-note(@click="addNote") +
	.notes
		.note(v-for="note in notes" @click="openNote(note.id)")
			.title {{note.title}}
			.time 12:05 PM
			.arrow &nbsp;>
</template>

<script>
import {reactive, onMounted} from 'vue'
import navigationBar from '~/components/ui/navigationBar.vue'
export default {
	name: "textApp",
	components: {navigationBar},
	methods: {
		openNote(id) {
			this.$router.push({name: 'noteScreen', params: {id: id}})
		}
	},
	setup() {
		const notes = reactive([
			{id: 1, title: "Hello World!"},
			{id: 2, title: "About this App"}
		])

		onMounted(() => {
		})

		function addNote() {
			console.log('Add')
		}

		return {notes, addNote}
	}
}
</script>

<style lang="stylus">
.notes-app
	background: #F8F79D
	color: #000	
	.notes
		.note
			border-bottom: 1px solid #EAE98F
			padding: 0.5em
			display: flex
			align-items: center
			line-height: 1.2
			.title
				color: #5B483A
				font-family: "Noteworthy"
				font-weight: bold
			.time
				color: #617B7D
				font-size: 0.9em
				margin-left: auto
			.arrow
				color: #617B7D
</style>