<template lang="pug">
.icon-body
	.content-header
		.title {{date.weekday}}
	.content-body
		.date {{date.date}}
</template>

<script>
export default {
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
.content-header
	background-image: linear-gradient(180deg, #EC9C9E 12%, #D13335 90%, #8c1719 100%)
.content-body
	background: #fff
	box-shadow: inset 0px 3em 4em rgba(#000,.25)
	// display: flex
	// justify-content: center
	// align-items: center
	line-height: 1.6
	.date
		color: #333
		font-size: 41em
		line-height: 700px
		font-weight: bold
		flex: 0 0 auto
@-moz-document url-prefix()
	.content-body .date
		line-height: 1.2
</style>