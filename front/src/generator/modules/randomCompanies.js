import { randomId, randomFalse } from '../utils/utils'


export default function randomCompanies(quantity = 1) {
	try {
		let randomCompanies = []
		for (var i = 1; i <= quantity; i++) {
			let randomCompany = 'Apple'
			randomCompanies.push(randomCompany)
		}
		return randomCompanies
	} catch(error) {
		console.log(error)
	}
}