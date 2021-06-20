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
		// &:before
		// 	content: ''
		// 	width: 10px
		// 	height: 10px
		// 	background: #fff
		// 	border: 2px solid #000
		// 	border-radius: 50%
		// 	position: absolute
		// 	top: calc(50% - 5px)
		// 	left: calc(50% - 5px)
		// 	z-index: 1
		
		.clock-hand
			backface-visibility: hidden
			width: 10px
			height: 10px
			position: absolute
			top: calc(50% - 5px)
			left: calc(50% - 5px)
			border: 2px solid #000
			border-radius: 50%
			&:before
				content: ''
				position: absolute
			
		.clock-h-hand
			animation: 10s tick infinite
			&:before
				width: 2px
				height: 12px
				background: #000
				bottom: 6px
				left: 2px
		.clock-m-hand
			animation: 5s tick infinite
			&:before
				width: 2px
				height: 20px
				background: #000
				bottom: 6px
				left: 2px
		.clock-s-hand
			animation: 1s tick infinite
			width: 4px
			height: 4px
			border: none
			background: red
			top: calc(50% - 2px)
			left: calc(50% - 2px)
			&:before
				width: 2px
				height: 35px
				background: red
				bottom: 1px
				left: 1px
		
		
	
	@keyframes tick
		from
			transform: rotate(0deg)
		to
			transform: rotate(360deg)
</style>