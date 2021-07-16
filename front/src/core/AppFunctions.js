"use strict"
import { useRouter } from 'vue-router'


export default function appFunctions() {
	const router = useRouter()
	const callContact = (number) => {
		router.push({name: "PhoneAppCalling", params: {number}})
	}

	return { callContact }
}