<template lang="pug">
.app.notes-app
	navigation-bar(:title="`Notes (${records.length})`" :background="['#875D52', '#51372F', '#3B2D21']")
		template(v-slot:btn)
			.add-note(@click="addRecord") +
			.add-note(@click="deleteAllRecords") -
	
	.list-view.notes
		.note(v-for="note in records" @click="openNote(note.id)")
			.title {{note.title}}
			.time {{convertTime(note.created)}}
			.arrow &nbsp;>
</template>

<script>
import {onMounted} from 'vue'
import navigationBar from '~/components/ui/navigationBar.vue'
import useStore from "~/store/store"

export default {
	name: "textApp",
	components: {navigationBar},
	methods: {
		openNote(id) {
			this.$router.push({name: 'noteScreen', params: {id: id}})
		},
		async addRecord() {
			let id = this.generateId()
			await this.$router.push({name: 'noteScreen', params: {id: id}})
			await this.createRecord({id:id})
		},
		
	},
	setup() {
		document.title = "Notes | iOS"
		const {records, getRecords, createRecord, generateId, deleteAllRecords} = useStore('notes')
		onMounted(() => getRecords())

		function convertTime(ts) {
			let time = new Date(ts)
			return time.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})
		}

		return {records, createRecord, convertTime, generateId, deleteAllRecords}
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