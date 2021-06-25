<template lang="pug">
.status-bar
	.group.left
		glyph(name="signal")
		.operator AT&T {{connectionInfo.type}}
		glyph(name="wifi")
	.group.center
		glyph(v-if="appState.locked" name="locked")
		.time(v-else) {{dateTime.time}}
	.group.right
		glyph(name="bluetooth")
		.battery-status
			//- .battery-level {{batteryInfo.level * 100}}%
			svg.battery-icon(viewBox="0 0 20 20")
				path.battery-energy(:style="batteryLevel" d="M1.53846 6.66667H16.1538V13.3333H1.53846V6.66667Z")
				path.battery-body(fill-rule="evenodd" clip-rule="evenodd" d="M17.6923 12.5V13.3333C17.6923 14.2538 17.0035 15 16.1538 15H1.53846C0.688792 15 0 14.2538 0 13.3333V6.66667C0 5.74619 0.688793 5 1.53846 5H16.1538C17.0035 5 17.6923 5.74619 17.6923 6.66667V7.5H19.2308C19.6556 7.5 20 7.8731 20 8.33333V11.6667C20 12.1269 19.6556 12.5 19.2308 12.5H17.6923ZM1.53846 5.83333H16.1538C16.5787 5.83333 16.9231 6.20643 16.9231 6.66667V13.3333C16.9231 13.7936 16.5787 14.1667 16.1538 14.1667H1.53846C1.11363 14.1667 0.769231 13.7936 0.769231 13.3333V6.66667C0.769231 6.20643 1.11363 5.83333 1.53846 5.83333ZM17.6923 8.33333V11.6667H19.2308V8.33333H17.6923Z")
		
</template>

<script>
import {ref, reactive, onMounted} from 'vue'
import {dateTime, appState} from "~/store/appState"
export default {
	name: "statusBar",
	computed: {
		batteryLevel() {
			let level = this.batteryInfo.level * 100
			let charging = this.batteryInfo.charging
			let style = []
			if(charging) style.push('fill:#1CC454')
			if(level <= 20) style.push('fill:yellow')
			if(level <= 10) style.push('fill:red')
			style.push(`clip-path:polygon(0% 0%, ${level}% 0%, ${level}% 100%, 0% 100%)`)
			return style
		}
	},
	setup() {
		// const {dateTime} = appState()

		let batteryInfo = reactive({
			charging: false,
			level: 1,
		})

		let connectionInfo = reactive({
			type: ''
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
		
		if(navigator.connection) {
			let connection = navigator.connection
			connectionInfo.type = connection.effectiveType
			connectionInfo.signal = connection.rtt
			console.log(connection)
			connection.addEventListener('change', function() {
				connectionInfo.type = connection.effectiveType
				connectionInfo.signal = connection.rtt
			})
		}


		onMounted(() => {
			// checkConnection()
			// getTime()
			// setInterval(getTime, 1000)
		})
		

		return {dateTime, appState, batteryInfo, connectionInfo}
	}
}
</script>

<style lang="stylus" scoped>
.battery-status
	.battery-icon
		width: 1.6em
		height: 1.5em
		fill: #c2c9cf
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
	position: relative
	z-index: 1000
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
		&.center
			justify-content: center
			margin: auto
			min-width: 0
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