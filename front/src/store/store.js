"use strict"
import { ref } from "vue"
import { openDB } from 'idb'
import _clonedeep from "lodash.clonedeep"



// Random ID
function randomId() {
    let s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

function sortObjects(key) {
	try {
		records.value.sort((a, b) => {
			let fa = a[key].toLowerCase(),
				fb = b[key].toLowerCase()
		
			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		})
	} catch(error) {
		console.log(error)
	}
}


export const records = ref([])




export default function useStore(collection) {
	
	const recordsToStore = async () => {
		try {
			const db = await openDB('iOS', 1)
			let result = await db.getAllFromIndex(collection, 'id')
			records.value = result
			// console.info(`Records To Store (${records.value.length}):  ${collection}`)
		} catch (error) {
			console.error(error)
		}
	}
	
	const cleanStore = async () => {
		try {
			records.value = []
		} catch (error) {
			console.error(error)
		}
	}


	
	
	const getRecords = async () => {
		let result
		try {
			const db = await openDB('iOS', 1)
			result = await db.getAllFromIndex(collection, 'id')
			records.value = result
			console.log('Get records: ' + collection)
		} catch (error) {
			console.error(error)
		} finally {
			result = null
		}
	}

	const getRecordF = async (id) => {
		let result
		try {
			// result = await db.get(collection, id)
			result = {content: "343"}
			return result
		} catch (error) {
			console.error(error)
		} finally {
			result = null
		}
	}

	const createRecord = async (record = {}) => {
		let id, newRecord, result
		try {
			const db = await openDB('iOS', 1)
			newRecord = _clonedeep(record)
			newRecord.id = randomId()
			newRecord.date = Date.now()
			records.value.push(newRecord)
			result = await db.add(collection, newRecord)
			// console.log(await db)
			// return result
			// result = await restRequest({method:'post', module, data:newRecord})
			// if (!result.ok) { delete records[id] }
		} catch (error) {
			console.error(error)
		} finally {
			id = null
			newRecord = null
			result = null
		}
	}

	const updateRecord = async (record) => {
		let oldRecord, updatedRecord, result
		try {
			let id = record._id
			oldRecord = _clonedeep(records[id])
			updatedRecord = _clonedeep(record)
			updatedRecord.updated = Date.now()
			records[id] = updatedRecord
			result = await restRequest({ method: 'put', module, id, data: updatedRecord })
			if (!result.ok) records[id] = oldRecord
		} catch (error) {
			console.error(error)
		} finally {
			oldRecord = null
			updatedRecord = null
			result = null
		}
	}

	const dublicateRecord = async (id) => {
		let original, dublicate
		try {
			original = records[id]
			dublicate = _clonedeep(original)
			await createRecord(dublicate)
		} catch (error) {
			console.error(error)
		} finally {
			original = null
			dublicate = null
		}
	}


	const deleteRecord = async (id) => {
		let result
		try {
			records[id].hidden = true
			result = await restRequest({ method: 'delete', module, id })
			if (result.ok) delete records[id]
			else records[id].hidden = false
		} catch (error) {
			console.error(error)
		} finally {
			result = null
		}
	}

	const deleteAllRecords = async () => {
		try {
			records.value = []
			const db = await openDB('iOS', 1)
			await db.clear(collection)
		} catch (error) {
			console.error(error)
		}
	}
	async function sortRecords(value) {
		records.value.sort((a, b) => a[value] - b[value])
	}

	const createDummyRecords = async (type, number) => {
		try {
			let response = await fetch(`http://localhost:85/v1/${type}/${number}`)
			let records = await response.json();
			records.forEach(record => createRecord(record))
		} catch (error) {
			console.error(error)
		}
	}

	return {
		records,
		recordsToStore,
		cleanStore,
		getRecordF,
		getRecords,
		createRecord,
		updateRecord,
		dublicateRecord,
		deleteRecord,
		createDummyRecords,
		deleteAllRecords,
		sortRecords
	}
}