// Modules
import { randomIds, randomTrue, quantityRange } from '../atoms/utils'
import { randomTexts } from '../molecules/randomTexts'

// Generate Random Conversations
function randomConversations({q}) {
	try {
		let randomText = randomTexts({q:1, p:[1,2], s:[1,5], w:[4,10] })
		console.log(randomText)
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomConversations }