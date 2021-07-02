<template lang="pug">
foreignObject.html-icon.icon-glare(x="0" y="0")
	.icon-body
		.sun
		.temp 73°
</template>

<style lang="stylus" scoped>
.icon-body
	height: 100%
	background: linear-gradient(180deg, #1965D8 40%, #5DE7FF 100%)
	display: flex
	flex-direction: column
	align-items: center
	justify-content: flex-end
	padding: 2.5em
	.temp
		line-height: 1
		font-size: 12em
		margin-top: 0.55em
		color: #fff
		text-align: center
		text-indent: 0.3em
		font-weight: bold
		text-shadow: 0px 0.07em 0 rgba(#000,.3)
	.sun
		position: relative
		width: 29em
		height: 29em
		&:before, &:after
			content: ''
			position: absolute
			border-radius: 50%
		&:before
			top: -10%
			left: -50%
			width: 200%
			height: 150%
			-webkit-mask-image: radial-gradient(#000 10%, transparent 65%)
			mask-image: radial-gradient(#000 10%, transparent 65%)
			background: repeating-conic-gradient(from 0deg, rgba(gold,.5) 0deg 7deg, rgba(gold,.4) 0deg 5deg, transparent 5deg 18deg)
			filter: blur(0.6em)
		&:after
			top: 0
			left: 0
			width: 100%
			height: 100%
			background: radial-gradient(95% 90% at 50% 10%, #FFC79A 0%, #FFB351 35%, #FFBD1F 55%, #FFF914 100%)
			box-shadow: inset 0 -2em 1em #fefa1b, inset 0 2.6em 1.4em rgba(#fff,.8), 0 0 5em 2.5em rgba(#FFBD1F,.7), 0 3em 4em rgba(#000,.2)
</style>