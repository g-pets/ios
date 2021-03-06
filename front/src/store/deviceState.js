"use strict"
import { reactive } from "vue"

const deviceState = reactive({
	appInstalled: false,
	deviceUnlocked: false,
	tornedOff: false
})

export default function deviceControl() {

	if(localStorage.getItem("appInstalled")) {
		deviceState.appInstalled = JSON.parse(localStorage.getItem("appInstalled"))
	}
	
	if(localStorage.getItem("deviceUnlocked")) {
		deviceState.deviceUnlocked = JSON.parse(localStorage.getItem("deviceUnlocked"))
	}

	const appInstalled = (state) => {
		deviceState.appInstalled = state
		localStorage.setItem("appInstalled", state)
	}

	const deviceUnlocked = (state) => {
		deviceState.deviceUnlocked = state
		localStorage.setItem("deviceUnlocked", state)
	}

	const tornOff = () => {
		deviceState.deviceUnlocked = false
		deviceState.tornedOff = !deviceState.tornedOff
		localStorage.setItem("deviceUnlocked", false)
	}
	return { deviceState, appInstalled, deviceUnlocked, tornOff }
}