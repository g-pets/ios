"use strict"
import { ref } from "vue"
import { openDB } from "idb"
import _clonedeep from "lodash.clonedeep"



// Random ID
function randomId() {
    let s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

export const records = ref([])




export default function useStore(collection) {
	
	const recordsToStore = async () => {
		try {
			const db = await openDB('iOS', 1)
			let result = await db.getAllFromIndex(collection, 'id')
			records.value = result
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
		try {
			const db = await openDB('iOS', 1)
			let result = await db.getAllFromIndex(collection, 'id')
			records.value = result
		} catch (error) {
			console.error(error)
		}
	}

	const createRecord = async (record = {}) => {
		try {
			const db = await openDB('iOS', 1)
			let newRecord = _clonedeep(record)
			newRecord.id = randomId()
			newRecord.date = Date.now()
			records.value.push(newRecord)
			result = await db.add(collection, newRecord)
		} catch (error) {
			console.error(error)
		}
	}

	const updateRecord = async (record) => {
		try {
			let id = record._id
			let oldRecord = _clonedeep(records[id])
			let updatedRecord = _clonedeep(record)
			updatedRecord.updated = Date.now()
			records[id] = updatedRecord
			let result = await restRequest({ method: 'put', module, id, data: updatedRecord })
			if (!result.ok) records[id] = oldRecord
		} catch (error) {
			console.error(error)
		}
	}

	const dublicateRecord = async (id) => {
		try {
			let original = records[id]
			let dublicate = _clonedeep(original)
			await createRecord(dublicate)
		} catch (error) {
			console.error(error)
		}
	}

	const deleteRecord = async (id) => {
		try {
			records[id].hidden = true
			let result = await restRequest({ method: 'delete', module, id })
			if (result.ok) delete records[id]
			else records[id].hidden = false
		} catch (error) {
			console.error(error)
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

	return {
		records,
		recordsToStore,
		cleanStore,
		getRecords,
		createRecord,
		updateRecord,
		dublicateRecord,
		deleteRecord,
		deleteAllRecords
	}
}