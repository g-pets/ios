"use strict"
import { reactive, onMounted } from "vue"

const timeOptions = {hour12: false, hour: '2-digit', minute:'2-digit'}
const dateOptions = {weekday: 'long', month: 'long', day: 'numeric'}
export const dateTime = reactive({})

export const appState = reactive({
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
	function unlockPhone() {
		appState.locked = false
	}
	function lockPhone() {
		appState.locked = true
	}
	return {lockPhone, unlockPhone}
}