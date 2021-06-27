import { randomId, randomFalse } from '../utils/utils'


export default function randomPhones(quantity = 1) {
	try {
		let randomPhones = []
		for (var i = 1; i <= quantity; i++) {
			let randomPhone = '1234'
			randomPhones.push(randomPhone)
		}
		return randomPhones
	} catch(error) {
		console.log(error)
	}
}