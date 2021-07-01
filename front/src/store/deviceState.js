"use strict"
import { reactive } from "vue"

const deviceState = reactive({
	appInstalled: false,
	deviceUnlocked: false
})

export default function deviceControl() {

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