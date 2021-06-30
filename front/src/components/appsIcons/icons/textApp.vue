<template lang="pug">
foreignObject.icon-glare(x="0" y="0")
	.icon-body
		glyph(name="sms")
</template>

<style lang="stylus" scoped>
.icon-body
	background: #1AD010
	background: linear-gradient(180deg, #29A621 0%, #29A621 40%, #1AD010 100%)
	display: flex
	svg.icon
		margin: auto
		width: 45em
		height: 45em
		fill: #fff
		filter: drop-shadow(0px 0.8em 0.5em rgba(#000, 0.3))
</style>