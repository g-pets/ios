<template lang="pug">
.clock-app-icon
	icon-glare
	.body
		.clock-hand.clock-h-hand(refs="hHand")
		.clock-hand.clock-m-hand(refs="mHand")
		.clock-hand.clock-s-hand(refs="sHand")
</template>

<script>
import iconGlare from '../src/iconGlare.vue'
export default {
	name: "clockAppIcon",
	components: {iconGlare}
};
</script>

<style lang="stylus" scoped>
clockSize = 250px
.clock-app-icon
	background: #000
	// outline:1px solid #fff
	box-shadow: inset 0 0 1px 0 rgba(#fff,0.4)
	.body
		width: 80%
		height: 80%
		margin: 10% auto
		background: #fff
		border-radius: 50%
		position: relative
		&:before
			content: ''
			position: absolute
			top: 0
			right: 0
			bottom: 0
			left: 0
			margin: auto
			width: 0.3em
			height: 0.3em
			border: 0.1em solid #000
			border-radius: 50%
			z-index: 2
		.clock-hand
			position: absolute
			// top: 0
			bottom: 5px
			left: calc(50% - 1px)
			margin: auto
			transform-origin: 0
			
		.clock-s-hand
			width: 2px
			height: 50%
			background: red
		.clock-m-hand
			width: 2px
			height: 50%
			background: blue
			transform: rotate(50deg)
		.clock-h-hand
			width: 2px
			height: 50%
			background: #000
			transform: rotate(150deg)
</style>