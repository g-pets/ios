import { randomId, randomFalse } from '../utils/utils'


export default function randomEmails(quantity = 1) {
	try {
		let randomEmails = []
		for (var i = 1; i <= quantity; i++) {
			let randomEmail = '@email'
			randomEmails.push(randomEmail)
		}
		return randomEmails
	} catch(error) {
		console.log(error)
	}
}