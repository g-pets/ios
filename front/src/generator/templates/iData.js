import { randomPersons } from "../organisms/randomPersons"
import { randomConversations } from "../organisms/randomConversations"


export default function iData() {
	try {
		let contacts = randomPersons({q:[5,10]})
		let iData = {
			// contacts,
			conversations: randomConversations({q:[1,3]})
		}
		return iData
	} catch(error) {
		console.error(error)
	}
}