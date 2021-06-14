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
			setInterval(getTime, 1000)
		})
		

		return {actualTime, batteryInfo}
	}
}
</script>

<style lang="stylus" scoped>
.status-bar
	position: fixed
	width: 100%
	top: 0
	left: 0
	line-height: 1
	padding: 0 0.3em
	font-size: 0.8em
	font-weight: 400
	color: #c2c9cf
	display: flex
	justify-content: space-between
	align-items: center
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
		min-width: 8em
		&.left
			justify-content: flex-start
		&.right
			justify-content: flex-end
	.operator, .battery-level
		font-size: 0.9em
		margin-top: 0.4em
	.operator
		margin-left: 0.1em
	.battery-level
		margin-right: 0.1em
</style>