<template lang="pug">
button.tab-bar-button
	glyph(:name="glyph")
	.label {{label}}
</template>

<script>
export default {
	name: "tabBarButton",
	props: {
		label: String,
		glyph: String,
	}
}
</script>

<style lang="stylus" scoped>
.tab-bar-button
	display: block
	flex: 1 1 25%		
	background: transparent
	border-radius: 0.2em
	padding: 0.2em
	+ button
		margin-left: 0.2em
	svg.icon
		width: 1.8em
		height: 1.8em
		fill: #a1a1a1
	.label
		color: #a1a1a1
		font-size: 0.6em
		font-weight: 600
		line-height: 1
		padding-top: 0.4em
	&.active
		background: linear-gradient(180deg, #454545 0%, #363636 50%, #252525 50%, #242424 100%)
		svg.icon
			fill: #51bff3
			filter: drop-shadow(0 2px 1px rgba(#000,.5))
		.label
			color: #fff
</style>