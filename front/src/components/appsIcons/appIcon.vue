<template lang="pug">
.app-item(@click="openApp")
	component.app-icon(:is="name")
	.app-title {{title}}
</template>

<script>
import calendarApp from './icons/calendarApp.vue'
import clockApp from './icons/clockApp.vue'
import iPodApp from './icons/iPodApp.vue'
import notesApp from './icons/notesApp.vue'
import phoneApp from './icons/phoneApp.vue'
import textApp from './icons/textApp.vue'
import tempIcon from './icons/tempIcon.vue'

// import {defineAsyncComponent} from 'vue'
export default {
	name: "appIcon",
	components: {calendarApp, clockApp, iPodApp, notesApp, phoneApp, textApp, tempIcon},
	props: {
		name: String,
		title: String
	},
	// computed: {
	// 	iconComponent() {
	// 		return defineAsyncComponent(() => import(`./icons/${this.name}.vue`))
	// 	}
	// },
	methods: {
		openApp() {
			this.$router.push({name: this.name})
		}
	}
}
</script>

<style lang="stylus" scoped>
.app-item
	cursor: pointer
	.app-icon
		width: 3.5em
		height: 3.5em
		overflow: hidden
		border-radius: 0.7em
		position: relative
	.app-title
		margin-top: 0.5em
		text-align: center
		font-size: 0.7em
		color: #ccc
		line-height: 1
</style>