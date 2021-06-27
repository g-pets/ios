import { randomNumber, randomFalse } from '../utils/utils'
import {maleNames, femaleNames, lastNames} from '../dict/names'

// First Name
export function randomFirstName() {
	try {
		let nameIndex = randomNumber(0, 999)
		return randomFalse(0.5) ? maleNames[nameIndex] : femaleNames[nameIndex]
	} catch (error) {
		console.error(error)
		return "!First Name"
	}
}

// Last Name
export function randomLastName() {
	try {
		return lastNames[randomNumber(0, 999)]
	} catch (error) {
		console.error(error)
		return "!Last Name"
	}
}