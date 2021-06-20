<template lang="pug">
foreignObject.html-icon.icon-glare(x="0" y="0")
	.icon-body
		.clock-body
			svg(viewBox="0 0 670 670" fill="none" xmlns="http://www.w3.org/2000/svg")
				defs
					path(id="clockGlare" d="M336.5 207.5c-193.12 0-297.5 43-297.5 43C69.72 114.53 191.25 13 336.5 13c145.26 0 266.8 101.53 297.51 237.5 0 0-104.38-43-297.5-43z")
				use.clock-glare(xlink:href="#clockGlare")
				path.clock-hand.h-hand(:style="`transform: rotate(${time.h}deg)`" fill-rule="evenodd" clip-rule="evenodd" d="M359.38 291.87a8.87 8.87 0 003.73 6.23 46 46 0 11-55.1.67 8.86 8.86 0 003.54-6.1l22.95-129.04c.12-1.2 1.88-1.2 2 0l22.88 128.24zm-23.38 8.4a35 35 0 110 70 35 35 0 010-70z")
				path.clock-hand.m-hand(:style="`transform: rotate(${time.m}deg)`" fill-rule="evenodd" clip-rule="evenodd" d="M359.38 291.14a8.87 8.87 0 003.73 6.23 46 46 0 11-55.1.67 8.86 8.86 0 003.54-6.1L334.5 52.9c.12-1.2 1.88-1.2 2 0l22.88 238.24zm-23.38 8.4a35 35 0 110 70 35 35 0 010-70z")
				circle.s-base(cx="335" cy="335" r="23")
				path.clock-hand.s-hand(:style="`transform: rotate(${time.s}deg)`" d="M338 29h-5l-1.97 291.32c-.02 2.79-1.85 5.18-3.8 7.18a11.5 11.5 0 1016.52 0c-1.93-2-3.76-4.4-3.78-7.18L338 29z")
				use.clock-glare.clock-glare-top(xlink:href="#clockGlare")
				

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
			setInterval(getTime, 1000)
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
		width: 800px
		height: 800px
		border-radius: 50%
		background: #eee
		margin: 100px auto
		position: relative
		overflow: hidden
		box-shadow: inset 0 20px 15px 10px #222, inset 0 0 0 20px #222
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
			// filter: drop-shadow(0px 3px 4px rgba(#000, 0.5))
		.m-hand
			filter: drop-shadow(0px 2px 1px rgba(#fff, 0.5))
		.s-hand
			fill: #FF0506
		.s-base
			fill: #FF7470
		.clock-glare
			fill: #fff
			opacity: 0.6
			&-top
				opacity: 0.2
			
			
	// .h-hand
	// 	// transform: rotate(320deg)
	// 	animation: 360s tick infinite linear
	// .m-hand
	// 	// transform: rotate(90deg)
	// 	animation: 36s tick infinite linear
	// .s-hand
	// 	// transform: rotate(0deg)
	// 	animation: 6s tick infinite linear
		
		
		
	
	@keyframes tick
		from
			transform: rotate(0deg)
		to
			transform: rotate(360deg)
</style>