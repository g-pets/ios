import { randomId, randomFalse } from '../utils/utils'


export default function randomCompanies(quantity = 1) {
	try {
		let randomAddresses = []
		for (var i = 1; i <= quantity; i++) {
			let randomAddress = 'Prague'
			randomAddresses.push(randomAddress)
		}
		return randomAddresses
	} catch(error) {
		console.log(error)
	}
}