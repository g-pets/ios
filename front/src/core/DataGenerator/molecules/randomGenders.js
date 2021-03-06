// Modules
import { randomNumber, quantityRange } from '../atoms/utils'
import { gendersDict } from '../dict/gendersDict'


// Random Genders
function randomGenders({q}) {
	try {
		let quantity = quantityRange(q)
		let randomGenders = []
		for (var i = 1; i <= quantity; i++) {
			let genderIndex = randomNumber(0, gendersDict.length-1)
			let randomGender = gendersDict[genderIndex]
			randomGenders.push(randomGender)
		}
		return randomGenders
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomGenders }