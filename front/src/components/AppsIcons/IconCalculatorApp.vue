<template lang="pug">
.icon-body(xmlns="http://www.w3.org/1999/xhtml")
	.buttons-container
		.button
			glyph(name="plus_calc")
		.button
			glyph(name="minus_calc")
		.button
			glyph(name="multyply_calc")
		.button
			glyph(name="divide_calc")
</template>

<style lang="stylus" scoped>
.icon-body
	background: linear-gradient(180deg, #FCFCFC 0%, #898A8E 100%)
	display: flex
	.buttons-container
		text-align: center
		margin: auto
	.button
		margin: 1em
		display: inline-block
		width: 23em
		height: 23em
		padding: 5.5em
		border-radius: 50%
		background: #705E54
		box-shadow: inset 0px 0px 2em rgba(#000,0.7), inset 0px 0px 20em rgba(#000, 0.4), 0 0.8em 0.7em rgba(#fff,0.5)
		position: relative
		pointer-events: none
		&:before
			content: ''
			position: absolute
			top: 1.3em
			left: 0
			right: 0
			margin: auto
			width: 70%
			height: 45%
			border-radius: 100% 100% 90% 90%/100% 100% 100% 100%
			background: linear-gradient(180deg, rgba(#fff, .5) 0%, rgba(#fff, .1) 100%)
			box-shadow: inset 0 0.7em 0.7em rgba(#fff,0.5)
		svg.icon
			width: 100%
			height: 100%
			fill: #fff
			filter: drop-shadow(0 -0.6em 0.2em rgba(#000,.4))
</style>