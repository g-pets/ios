<template lang="pug">
.app-icon(@click="openApp(data.key)")
	icon(name="app-icon")
	.name {{data.title}}
</template>

<script>
export default {
	name: "appIcon",
	props: {
		data: Object
	},
	methods: {
		openApp(name) {
			this.$router.push({name: name})
		}
	},
	
};
</script>

<style lang="stylus" scoped>
.app-icon
	.icon
		width: 4em
		height: 4em
		// border-radius: 0.7em
		// border: 0.1em #555 solid
	.name
		margin-top: 0.5em
		text-align: center
		font-size: 0.8em
		color: #bbb
		line-height: 1
</style>