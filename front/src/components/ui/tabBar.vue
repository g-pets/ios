<template lang="pug">
.tab-bar
	button
		glyph(name="globe")
</template>

<script>
export default {
	name: "tabBar",
	props: {
		title: String,
		back: String,
		background: Array,
		data: Object
	},
}
</script>

<style lang="stylus">
.tab-bar
	background: linear-gradient(180deg, #2f2f2f 0%, #181818 50%, #000 100%)
	box-shadow: 0 -1px 0 rgba(#000,0.3), inset 0 1px 0 rgba(#fff,0.1)
	color: #fffffa
	padding: 0.45em 0.3em
	text-align: center
	display: flex
	justify-content: space-between
	align-items: center
	width: 100%
	position: sticky
	left: 0
	bottom: 0
	// top: 1.26em
	z-index: 2
</style>