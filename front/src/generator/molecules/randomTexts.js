// Modules
import { randomNumber, quantityRange, capitalizeFirstLetter } from '../atoms/utils'
import { wordsDict } from '../dict/wordsDict'

const dictLength = wordsDict.length

// Random Word
function randomWords({q}) {
	try {
		let quantity = quantityRange(q)
		let randomWords = []
		for (var i = 0; i < quantity; i++) {
			let wordIndex = randomNumber(0,dictLength-1)
			randomWords.push(wordsDict[wordIndex])
		}
		return randomWords
	} catch(error) {
		console.error(error)
	}
}

// Random Sentences
function randomSentences({q,w}) {
	try {
		let quantity = quantityRange(q)
		let randomSentences = []
		for (var i = 0; i < quantity; i++) {
			let wordsCount = quantityRange(w)
			// console.log(wordsCount)
			let sentence = randomWords({q:wordsCount}).join(' ') + '.'
			randomSentences.push(capitalizeFirstLetter(sentence))
		}
		return randomSentences
	} catch(error) {
		console.error(error)
	}
}

// Random Paragraph
function randomParagraphs({q,s,w}) {
	try {
		let quantity = quantityRange(q)
		let randomParagraphs = []
		for (var i = 0; i < quantity; i++) {
			let sentencesCount = quantityRange(s)
			let randomParagraph = randomSentences({q:sentencesCount, w: w}).join(' ')
			randomParagraphs.push(randomParagraph)
		}
		return randomParagraphs
	} catch(error) {
		console.error(error)
	}
}




// Random Texts
function randomTexts({q,p,s,w}) {
	try {
		let quantity = quantityRange(q)
		let randomTexts = []
		for (var i = 0; i < quantity; i++) {
			let randomText = randomParagraphs({q:p,s:s,w:w})
			randomTexts.push(randomText)
		}
		return randomTexts
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomWords, randomSentences, randomParagraphs, randomTexts }