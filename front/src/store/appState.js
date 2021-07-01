"use strict"
import { reactive, onMounted } from "vue"

const timeOptions = {hour12: false, hour: '2-digit', minute:'2-digit'}
const dateOptions = {weekday: 'long', month: 'long', day: 'numeric'}
const dateTime = reactive({})

export const appState = reactive({
	installed: false,
	locked: true
})





export default function runApp() {
	function getTime() {
		let d = new Date()
		dateTime.time = d.toLocaleTimeString('en-US', timeOptions)
		dateTime.date = d.toLocaleDateString('en-US', dateOptions)
	}
	onMounted(() => {
		getTime()
		setInterval(getTime, 1000)
	})
	return {runApp}
}


export function appStateFunctions() {
	const toggleDeviceLock = () => appState.locked = !appState.locked
	return {toggleDeviceLock}
}

export { dateTime }



