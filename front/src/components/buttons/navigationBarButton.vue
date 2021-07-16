<template lang="pug">
button.navigation-bar-button
	.label(v-if="label") {{label}}
	glyph(v-if="glyph" :name="glyph")
</template>

<script>
export default {
	name: "navigationBarButton",
	props: {
		label: String,
		glyph: String
	},
}
</script>

<style lang="stylus" scoped>
.navigation-bar-button
	flex: 0 1 auto
	font-size: 0.75em
	background: linear-gradient(180deg, #96a6bd 0%, #617ca1 50%, #43608a 100%)
	border-radius: 0.4em
	box-shadow: inset 0 0 0 1px rgba(#000,0.3), 0 1px 0 rgba(#fff,0.2)
	.label
		text-shadow: 0px -0.05em 0 rgba(#000,.5)
		// padding: 0.6em 0.9em 0.6em
		padding: 0.6em 0.5em
		font-weight: bold
		line-height: 1
		color: #fefefe
		text-overflow: ellipsis
		overflow: hidden
		white-space: nowrap
	svg.icon
		width: 1.2em
		height: 1.2em
		margin: 0.5em
		fill: #fefefe
		filter: drop-shadow(0 -1px 0 rgba(#000,.4))
		// background: red
</style>