<template lang="pug">
foreignObject.html-icon.icon-glare(x="0" y="0")
	.icon-body
		glyph(name="ipod")
</template>

<style lang="stylus" scoped>
.icon-body
	height: 100%
	background: linear-gradient(180deg, #FF7407 40%, #FFBA0C 100%)
	display: flex
	svg.icon
		margin: auto
		width: 46em
		height: 46em
		fill: #fff
		filter: drop-shadow(0px 0.8em 0.5em rgba(#000, 0.2))
</style>