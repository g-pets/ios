<template lang="pug">
.app-item(@click="openApp")
	component.app-icon(:is="iconComponent")
	.app-title {{title}}
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
	name: "appIcon",
	props: {
		name: String,
		title: String
	},
	computed: {
		iconComponent() {
			return defineAsyncComponent(() => import(`./icons/${this.name}.vue`))
		}
	},
	methods: {
		openApp() {
			this.$router.push({name: this.name})
		},
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