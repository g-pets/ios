<template lang="pug">
foreignObject.html-icon.icon-glare(x="0" y="0")
	.icon-body
		.clock-body
			.clock-hand.clock-h-hand(refs="hHand")
			//- .clock-hand.clock-m-hand(refs="mHand")
			//- .clock-hand.clock-s-hand(refs="sHand")
</template>

<style lang="stylus" scoped>
.icon-body
	height: 100%
	background: #000
	.clock-body
		width: 80px
		height: 80px
		border-radius: 50%
		background: #fff
		margin: 10px auto
		position: relative
		&:before
			content: ''
			position: absolute
			top: 0
			right: 0
			bottom: 0
			left: 0
			margin: auto
			width: 10px
			height: 10px
			border: 2px solid #000
			border-radius: 50%
			z-index: 2
		.clock-hand
			position: absolute
			// top: 0
			bottom: 5px
			left: calc(50% - 1px)
			margin: auto
			transform-origin: 0px
		.clock-h-hand
			width: 2px
			height: 20px
			background: #000
			transform: rotate(150deg)
		.clock-s-hand
			width: 2px
			height: 50%
			background: red
		.clock-m-hand
			width: 2px
			height: 50%
			background: blue
			transform: rotate(50deg)
		
</style>