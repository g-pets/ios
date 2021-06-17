<template lang="pug">
.icon-head(:style="gradientStyle")
	.icon-head-title(v-if="title") {{title}}
</template>

<script>
export default {
	name: "appIconHead",
	props: {
		gradient: Array,
		title: String

	},
	computed: {
		gradientStyle() {
			return `background-image: linear-gradient(180deg, ${this.gradient[0]} 12%, ${this.gradient[1]} 100%)`
		}
	}
}
</script>

<style lang="stylus" scoped>
.icon-head
	height: 1em
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5)
	position: relative
	z-index: 1
	&-title
		font-size: 0.55em
		line-height: 2.2
		text-align: center
		color: #fff
		font-weight: bold
		text-shadow: 0px -0.05em 0 rgba(0, 0, 0, 0.35)
</style>