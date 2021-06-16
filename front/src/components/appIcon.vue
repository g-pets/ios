<template lang="pug">
.app-icon(@click="openApp(data.key)")
	icon(:name="data.icon")
	//- img.icon(:src="`/img/apps/${data.key}.png`")
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
	cursor: pointer
	.icon
		width: 3.5em
		height: 3.5em
		overflow: hidden
		border-radius: 0.7em
		pointer-events: none
	.name
		margin-top: 0.5em
		text-align: center
		font-size: 0.7em
		color: #ccc
		line-height: 1
</style>