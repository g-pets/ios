<template lang="pug">
.world-clock
	.cities
		.city(v-for="city in cities")
			.city-name {{city.name}}
			clock(:shift="city.shift")
			.city-time
				.time 12:38
				.day Today
	world-map
//- .screenshot
</template>

<script>
import {reactive, onMounted} from 'vue'
import worldMap from '~/components/svg/ui/worldMap.vue'
import clock from '~/components/elements/clock.vue'
export default {
	name: "worldClock",
	components: {worldMap, clock},
	setup() {
		const cities = reactive([
			{name: "Los Angeles", shift: 10},
			{name: "London", shift: 10},
			// {name: "Prague", shift: 10},
			// {name: "Moscow", shift: 10}
		])
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
		return {time, cities}
	}
}
</script>

<style lang="stylus" scoped>
.screenshot
	position: absolute
	top: 0
	left: 0
	background-image: url("/screens/clockApp-worldMap.jpg")
	width: 100%
	height: 100%
	background-repeat: no-repeat
	background-size: cover
	z-index: 0
	opacity: 1
	// opacity: 0.5


.world-clock
	.world-map
		width: 100%
		height: auto
		margin: auto
		fill: #fff
		opacity: 0.2
	.city
		display: flex
		padding: 0.6em 0.5em 0.5em
		justify-content: center
		align-items: center
		background: linear-gradient(180deg, #d5d5d7 0%, #c8c7cc 50%, #b3b2b7 100%)
		box-shadow: inset 0 -1px 0 rgba(#000,0.3), inset 0 1px 0 rgba(#fff,0.5)
		.city-name, .city-time
			flex-basis: 10rem
			color: #000
			font-weight: bold
			font-size: 0.9em
			text-shadow: 0px 0.05em 0 rgba(#fff,.8)
		svg.city-clock
			border-radius: 50%
			margin: auto
			width: 4.7em
			height: 4.7em
			.clock-base
				fill: #eee
			.clock-numbers
				fill: #000
			.clock-hand
				fill: #000
				transition: transform 0.3s
				filter: drop-shadow(0px 3px 4px rgba(#000, 0.3))
			.m-hand
				filter: drop-shadow(0px 0px 3px rgba(#fff, 0.8))
			.s-hand
				fill: #FF0506
			.s-base
				fill: #FF7470
			.clock-glare
				fill: #fff
				opacity: 0.7
				&-top
					opacity: 0.2
			.clock-hand, .s-base
				transform-origin: center
				backface-visibility: hidden
		.city-name
			padding-top: 0.2em
			line-height: 1.2
		.city-time
			text-align: right
			line-height: 1.2
			padding-right: 0.3em
			padding-top: 0.6em
			.time
				font-size: 1.7em
			.day
				font-size: 1em
</style>