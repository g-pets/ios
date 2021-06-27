// Modules
import { randomId, randomFalse } from '../utils/utils'
import { randomFirstName, randomLastName } from "./randomName"
import randomEmails from "./randomEmails"
import randomPhones from "./randomPhones"
import randomCompanies from "./randomCompanies"
import randomAddresses from "./randomAddresses"
import randomDateInRange from "./randomDate"


export default function randomPersons(quantity = 1) {
	try {
		let randomPersons = []
		for (var i = 1; i <= quantity; i++) {
			let firstName = randomFirstName()
			let lastName = randomLastName()
			let company = randomCompanies()
			let randomPerson = {
				personID: randomId(),
				created: randomDateInRange(180),
				firstName,
				lastName,
				company,
				favorite: randomFalse(0.8),
				phones: randomPhones(),
				emails: randomEmails(),
				addresses: randomAddresses(),
			}
			randomPersons.push(randomPerson)
		}
		return randomPersons
	} catch(error) {
		console.log(error)
	}
}