<template lang="pug">
.app-icon(@click="openApp(data.key)")
	//- .temp-icon
	//- 	icon(name="app-icon")
	img.icon(:src="`/img/apps/${data.key}.png`")
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
	.temp-icon
		overflow: hidden
		border-radius: 0.6em
		background: linear-gradient(180deg, #64B0FB 0%, #2572F2 100%)
		.icon
			width: 3.5em
			height: 3.5em
			opacity: 0.4
			fill: none
			stroke: #fff
	.icon
		width: 3.5em
		height: 3.5em
		overflow: hidden
		border-radius: 0.8em
		pointer-events: none
	.name
		margin-top: 0.5em
		text-align: center
		font-size: 0.7em
		color: #ccc
		line-height: 1
</style>