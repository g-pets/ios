"use strict"
import { reactive } from "vue"

const deviceState = reactive({
	appInstalled: false,
	deviceUnlocked: false
})

export default function deviceControl() {

	if(localStorage.getItem("appInstalled")) {
		deviceState.appInstalled = true
	}
	
	if(localStorage.getItem("deviceUnlocked")) {
		deviceState.deviceUnlocked = true
	}

	const appInstalled = (state) => {
		deviceState.appInstalled = state
		localStorage.setItem("appInstalled", state)
	}

	const deviceUnlocked = (state) => {
		deviceState.deviceUnlocked = state
		localStorage.setItem("deviceUnlocked", state)
	}
	return { deviceState, appInstalled, deviceUnlocked }
}