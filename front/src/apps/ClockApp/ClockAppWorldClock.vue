<template lang="pug">
.world-clock.section-scrolled
	.cities
		.city(v-for="city in cities")
			.city-name {{city.name}}
			analog-clock(:utc="city.utc")
			.city-time
				.time {{city.hour}}:{{city.minute}}
				.day Today
	world-map
</template>


<script>
import { reactive, onMounted } from "vue"
import WorldMap from "~/assets/UI/WorldMap.vue"
import AnalogClock from "~/components/Misc/AnalogClock.vue"
export default {
	components: { WorldMap, AnalogClock },
	setup() {
		const cities = reactive([
			{name: "Los Angeles", utc: -7},
			{name: "London", utc: 1},
			{name: "Prague", utc: 2}
		])
		const getTime = () => {
			let d = new Date()
			let hours = d.getHours()
			let minutes = d.getMinutes()
			let offset = d.getTimezoneOffset() / 60
			cities.forEach(city => {
				city.hour = hours + city.utc + offset
				city.minute = minutes
			})
		}
		onMounted(() => getTime())
		return { cities }
	}
}
</script>

<style lang="stylus" scoped>
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