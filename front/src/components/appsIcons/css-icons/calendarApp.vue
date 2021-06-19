<template lang="pug">
.calendar-app-icon
	icon-head(:gradient=['#EC9C9E', '#D13335'] :title="date.weekday")
	.body {{date.date}}
</template>

<script>
import iconHead from '../src/iconHead.vue'
export default {
	name: "calendarAppIcon",
	components: {iconHead},
	computed: {
		date() {
			var date = new Date();
			var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
			var weekday = date.getDay()
			var date = date.getDate()
			return {weekday:weekdays[weekday], date}
		}
	}
}
</script>

<style lang="stylus" scoped>
.calendar-app-icon
	font-size: 1.6rem
	width: 70%
	height: 70%
	// overflow: hidden
	border-radius: 0.6em
	position: relative
	.icon-background
		width: 100%
		height: 100%
		fill: #fff
	.icon-header
		width: 100%
		height: 100%
		filter: drop-shadow(0 0.5em 1em rgba(#000, 0.2))
		.header-title
			color: #fff
			text-align: center
			font-size: 1em
			line-height: 2
			font-family: Helvetica
			font-weight: bold
			background-image: linear-gradient(180deg, #EC9C9E 12%, #D13335 100%)
			text-shadow: 0px -0.05em 0 #000
	.icon-body
		width: 100%
		height: 100%
		fill: #fff
		.date
			background: #fff
			width: 100%
			height: 100%
			color: #333
			text-align: center
			font-size: 4em
			line-height: 1.2
			font-weight: bold
</style>