import { randomNumber } from '../utils/utils'

// Random Date in Range (days)
export default function randomDateInRange(days) {
	try {
		let distance = days || 1
		let max = distance * 1000 * 60 * 60 * 24
		let date = Date.now()
		let past = randomNumber(1000, max)
		return date - past
	} catch(error) {
		console.error(error)
	}
}