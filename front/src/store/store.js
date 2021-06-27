"use strict"
import { ref } from "vue"
import { openDB } from 'idb'
import _clonedeep from "lodash.clonedeep"




// const db = openDB('iOS', 1, {
// 	upgrade(db) {
// 		const store = db.createObjectStore('notes', {
// 			keyPath: 'id',
// 			autoIncrement: false,
// 		})
// 		store.createIndex('id', 'id')
// 		store.createIndex('created', 'created')
// 	}
// })



export default function useStore(collection) {
	const records = ref([])

	// const db = openDB('iOS', 1, {
	// 	upgrade(db) {
	// 		const store = db.createObjectStore(collection, {
	// 			keyPath: 'id',
	// 			autoIncrement: false,
	// 		})
	// 		store.createIndex('id', 'id')
	// 		store.createIndex('created', 'created')
	// 	}
	// })

	

	// const generateId = () => {
	// 	return JSON.stringify(Date.now())
	// }
	
	const getRecords = async () => {
		let result
		try {
			const db = await openDB('iOS', 1)
			result = await db.getAllFromIndex(collection, 'created')
			// result.sort((a, b) => {return b.created - a.created})
			records.value = result
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
			newRecord.created = Date.now()
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
		getRecordF,
		getRecords,
		createRecord,
		updateRecord,
		dublicateRecord,
		deleteRecord,
		createDummyRecords,
		deleteAllRecords,
	}
}