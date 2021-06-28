import { randomPersons } from "./organisms/randomPersons"


export default async function generateData() {
	let start = Date.now()
	try {
		let data = {
			contacts: randomPersons({q:[50,300]})
		}
		console.log(data)
		return data
	} catch(error) {
		console.error(error)
	} finally {
		console.info(Date.now() - start + 'ms')
	}
}