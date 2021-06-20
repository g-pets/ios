<template lang="pug">
foreignObject.html-icon(x="0" y="0")
	.icon-header
	.icon-body
</template>

<style lang="stylus" scoped>
.icon-header
	background-image: linear-gradient(180deg, #7B584C 12%, #45322C 100%)
.icon-body
	height: 70px
	background: repeating-linear-gradient(#f8f59d, #f8f59d 8px, #d6d593 8px, #d6d593 9px)
	background-position-y: 4px
	position: relative
	&:before
		content: ""
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 3px
		background: #fbf8a6
		box-shadow: 0 2px 4px rgba(#000,.5)
	&:after
		content: ""
		position: absolute
		top: 0
		left: 12px
		width: 5px
		height: 100%
		border-left: solid 1px rgba(#880B0B, 0.2)
		border-right: solid 1px rgba(#880B0B, 0.2)
</style>