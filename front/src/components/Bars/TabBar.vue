<template lang="pug">
.tab-bar.section-fixed
	router-link(v-for="section in sections" :to="{name: section.name}" custom v-slot="{ navigate, isExactActive }")
		button.tab-bar-button(:class="{active: isExactActive}" @click="navigate")
			glyph(:name="section.glyph")
			.label {{section.label}}
</template>

<script>
export default {
	name: "tabBar",
	props: {sections: Array}
}
</script>

<style lang="stylus" scoped>
.tab-bar
	background: linear-gradient(180deg, #2f2f2f 0%, #181818 50%, #000 100%)
	box-shadow: 0 -1px 0 rgba(#000,0.3), inset 0 1px 0 rgba(#fff,0.1)
	color: #fffffa
	padding: 0.15em 0.1em
	text-align: center
	display: flex
	align-items: center
	width: 100%
	z-index: 2
	button.tab-bar-button
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