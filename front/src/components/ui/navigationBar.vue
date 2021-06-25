<template lang="pug">
.navigation-bar
	.group.left
		slot(name="left")
	.title {{$route.meta.title}}
	.group.right
		slot(name="right")
</template>

<style lang="stylus">
.navigation-bar
	background: linear-gradient(180deg, #875D52 0%, #51372F 50%, #3B2D21 100%)
	box-shadow: inset 0 -1px 0 rgba(#000,0.3), inset 0 1px 0 rgba(#fff,0.5)
	color: #fffffa
	padding: 0.45em 0.3em
	text-align: center
	display: flex
	justify-content: space-between
	align-items: center
	width: 100%
	position: sticky
	top: 0
	left: 0
	// top: 1.26em
	z-index: 2
	.title
		text-shadow: 0px -0.05em 0 rgba(#000,.5)
		font-size: 1.3em
		font-weight: bold
		line-height: 1
		padding-top: 0.2em
		letter-spacing: -0.02em
	.group
		width: 3em
		display: flex
		&.left
			justify-content: flex-start
		&.right
			justify-content: flex-end
</style>