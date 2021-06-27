import randomPersons from "./modules/randomPersons"


export default async function generateData() {
	let start = Date.now()
	try {
		let data = {
			contacts: randomPersons()
		}
		console.log(data)
	} catch(error) {
		console.error(error)
	} finally {
		console.info(Date.now() - start)
	}
}