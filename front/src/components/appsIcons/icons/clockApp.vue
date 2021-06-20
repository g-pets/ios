<template lang="pug">
foreignObject.html-icon.icon-glare(x="0" y="0")
	.icon-body
		.clock-body
			//- .hours
				span(v-for="i in 12") {{i}}
			svg.arrows(viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg")
				path.clock-hand.h-hand(:style="`transform: rotate(${time.h}deg)`" fill-rule="evenodd" clip-rule="evenodd" d="M76.9961 64.5129L72.0671 42L67.1606 64.4105C64.6588 66.0091 63 68.8108 63 72C63 76.9706 67.0294 81 72 81C76.9706 81 81 76.9706 81 72C81 68.8779 79.4102 66.1271 76.9961 64.5129ZM78 72C78 75.3137 75.3137 78 72 78C68.6863 78 66 75.3137 66 72C66 68.6863 68.6863 66 72 66C75.3137 66 78 68.6863 78 72Z")
				path.clock-hand.m-hand(:style="`transform: rotate(${time.m}deg)`" fill-rule="evenodd" clip-rule="evenodd" d="M78 72C78 75.3137 75.3137 78 72 78C68.6863 78 66 75.3137 66 72C66 68.6863 68.6863 66 72 66C75.3137 66 78 68.6863 78 72ZM81 72C81 76.9706 76.9706 81 72 81C67.0294 81 63 76.9706 63 72C63 68.8512 64.6171 66.0801 67.066 64.4718L72 25L76.934 64.4718C79.3829 66.0801 81 68.8512 81 72Z")
				path.clock-hand.s-hand(:style="`transform: rotate(${time.s}deg)`" d="M73 6H71L70.0095 67.4119C68.2385 68.1813 67 69.946 67 72C67 74.7614 69.2386 77 72 77C74.7614 77 77 74.7614 77 72C77 69.946 75.7615 68.1813 73.9905 67.4119L73 6Z")
</template>

<script>
import {reactive, onMounted} from 'vue'
export default {
	name: "clockAppIcon",
	setup() {
		let time = reactive({s:0,m:0,h:0})
		function getTime() {
			let date = new Date()
			time.s = (360 / 60 * date.getSeconds()).toFixed()
			time.m = (360 / 60 * date.getMinutes()).toFixed()
			time.h = (360 / 12 * date.getHours()).toFixed()
		}
		onMounted(() => {
			getTime()
			// setInterval(getTime, 1000)
		})
		return {time}
	}
}
</script>

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
		.hours
			position: absolute
			font-size: 0.7em
			color: #000
			width: 100%
			height: 100%
			span
				position: absolute
				&:nth-child(1)
					transform: translateX(20px)
				&:nth-child(2)
					transform: translateX(25px) translateY(5px)
		.clock-hand
			transform-origin: center
			backface-visibility: hidden
			fill: #000
			transition: transform 0.3s
		.h-hand
			transform: rotate(320deg)
			// animation: 25s tick infinite linear
		.m-hand
			transform: rotate(90deg)
			// animation: 10s tick infinite linear
		.s-hand
			transform: rotate(0deg)
			fill: #FF0000
			// animation: 3s tick infinite linear
			
			
		
		
		
	
	@keyframes tick
		from
			transform: rotate(0deg)
		to
			transform: rotate(360deg)
</style>