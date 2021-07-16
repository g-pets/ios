<template lang="pug">
.icon-body
	.content-header
	.content-body
</template>

<style lang="stylus" scoped>
.content-header
	background-image: linear-gradient(180deg, #845c4c 12%, #4b332a 100%)
.content-body
	height: 70em
	background: repeating-linear-gradient(#f8f59d, #f8f59d 98px, #B6BE92 98px, #B6BE92 105px)
	background-position-y: 40px
	position: relative
	&:before
		content: ""
		position: absolute
		z-index: 1
		top: 0
		left: 0
		width: 100%
		background: #fbf8a6
		box-shadow: 0 20px 20px rgba(#000,.5)
	&:after
		content: ""
		position: absolute
		top: 0
		left: 120px
		width: 50px
		height: 100%
		border-left: solid 10px rgba(#880B0B, 0.2)
		border-right: solid 10px rgba(#880B0B, 0.2)
</style>