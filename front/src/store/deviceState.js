"use strict"
import { reactive } from "vue"

const deviceState = reactive({
	unlocked: false
})

export default function deviceControl() {
	deviceState.unlocked = localStorage.getItem("unlocked")
	const unlockedDevice = (state) => {
		deviceState.unlocked = state
		localStorage.setItem("unlocked", state)
	}
	return { deviceState, unlockedDevice }
}