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
	.body
		height: 2.5em
		background: #fff
		color: #333
		text-align: center
		font-size:2.3em
		font-weight: bold
		line-height: 1.15
</style>