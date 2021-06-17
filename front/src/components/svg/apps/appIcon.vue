<template lang="pug">
.next.app-icon
	component(:is="svgIcon()")
	.name {{data.name}}
</template>

<script>
// import svgNotesIcon from "./src/tempApp.vue"
import {defineAsyncComponent} from 'vue'
export default {
	name: "appIcon",
	props: {
		data: Object
	},
	methods: {
		openApp(name) {
			this.$router.push({name: name})
		},
		svgIcon() {
			return defineAsyncComponent(() => import(`./src/${this.data.icon}.vue`))
		}
	},
};
</script>

<style lang="stylus" scoped>
.next.app-icon
	cursor: pointer
	svg
		width: 3.5em
		height: 3.5em
		overflow: hidden
		border-radius: 0.7em
	.name
		margin-top: 0.5em
		text-align: center
		font-size: 0.7em
		color: #ccc
		line-height: 1
</style>