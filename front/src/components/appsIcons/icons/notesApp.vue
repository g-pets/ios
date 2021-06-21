<template lang="pug">
foreignObject.html-icon(x="0" y="0")
	.icon-header
	.icon-body
</template>

<style lang="stylus" scoped>
.icon-header
	background-image: linear-gradient(180deg, #7B584C 12%, #45322C 100%)
.icon-body
	height: 700px
	background: repeating-linear-gradient(#f8f59d, #f8f59d 80px, #d6d593 80px, #d6d593 90px)
	background-position-y: 40px
	position: relative
	&:before
		content: ""
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 30px
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