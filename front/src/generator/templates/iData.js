import { randomPersons } from "../organisms/randomPersons"
import { randomConversations } from "../organisms/randomConversations"
import { randomRecentCalls } from "../organisms/randomRecentCalls"


export default function iData() {
	try {
		let contacts = randomPersons({q:[30,100]})
		let iData = {
			contacts,
			conversations: randomConversations({q:[50,100], contacts}),
			calls: randomRecentCalls({q:[30,50], contacts}),
		}
		return iData
	} catch(error) {
		console.error(error)
	}
}