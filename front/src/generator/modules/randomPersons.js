import { randomFirstName, randomLastName } from "./randomName"
import { randomId, randomFalse } from '../utils/utils'


export default function randomPersons(quantity = 1) {
	try {
		let randomPersons = []
		for (var i = 1; i <= quantity; i++) {
			let firstName = randomFirstName()
			let lastName = randomLastName()
			let randomPerson = {
				personID: randomId(),
				// created: created,
				firstName,
				lastName,
				// company: capitalizeFirstLetter(company),
				favorite: randomFalse(0.8),
				// phones: phones,
				// emails: emails,
				addresses: [
					{type: "work", address: "Prague, Czech Republic"}
				],
			}
			randomPersons.push(randomPerson)
		}
		return randomPersons
	} catch(error) {
		console.log(error)
	}
}