<template lang="pug">
.status-bar
	.group.left
		icon(name="signal")
		.operator AT&T
		icon(name="wifi")
	.time {{actualTime}}
	.group.right
		icon(name="bluetooth")
		//- .battery-level {{batteryInfo.level * 100}}%
		icon(name="battery" :class="{charging: batteryInfo.charging}")
		
</template>

<script>
import {ref, reactive, onMounted} from 'vue'
export default {
	name: "statusBar",
	setup() {
		let actualTime = ref('')
		function getTime() {
			let date = new Date()
			actualTime.value = date.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})
		}
		

		let batteryInfo = reactive({
			charging: false,
			level: 1
		})

		if(navigator.getBattery) {
			navigator.getBattery().then(function(battery) {
				batteryInfo.charging = battery.charging
				batteryInfo.level = battery.level
				battery.addEventListener('chargingchange', function() {
					batteryInfo.charging = battery.charging
				})
				battery.addEventListener('levelchange', function() {
					batteryInfo.level = battery.level
				})
			})
		}


		onMounted(() => {
			getTime()
			// setInterval(getTime, 1000)
		})
		

		return {actualTime, batteryInfo}
	}
}
</script>

<style lang="stylus" scoped>
.status-bar
	width: 100%
	height: 2rem
	padding: 0 0.3em
	display: flex
	align-items: center
	background: #000
	color: #c2c9cf
	font-size: 0.8em
	line-height: 1
	font-weight: 400
	.icon
		width: 1.6em
		height: 1.5em
		fill: #c2c9cf
		&-wifi
			margin-left: 0.3em
		&-battery.charging
			fill: #1CC454
	.group
		display: flex
		min-width: 6em
		&.left
			justify-content: flex-start
		&.right
			justify-content: flex-end
		
	.time
		margin: auto
	.operator, .battery-level
		font-size: 0.9em
		margin-top: 0.4em
	.operator
		margin-left: 0.1em
	.battery-level
		margin-right: 0.1em
	@media screen and (max-width: 250px)
		justify-content: center
		.time
			margin-top: 0.25em
		.group
			display: none
</style>