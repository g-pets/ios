// Modules
import { randomNumber, quantityRange } from '../atoms/utils'
import { companiesDict } from '../dict/companiesDict'


// Random Companies
function randomCompanies({q}) {
	try {
		let quantity = quantityRange(q)
		let randomCompanies = []
		for (var i = 1; i <= quantity; i++) {
			let companyIndex = randomNumber(0, companiesDict.length-1)
			let randomCompany = companiesDict[companyIndex]
			randomCompanies.push(randomCompany)
		}
		return randomCompanies
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomCompanies }