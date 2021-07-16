"use strict"
import {reactive} from "vue";
import _clonedeep  from "lodash.clonedeep"
import { openDB} from 'idb'

function generateId() {
	return JSON.stringify(Date.now())
}

const db = openDB('iOS', 1, {
	upgrade(db) {
		// Create a store of objects
		const store = db.createObjectStore('notes', {
			keyPath: 'id',
			autoIncrement: false,
		});
		store.createIndex('id', 'id');
		store.createIndex('created', 'created');
	},
});






export default function useIdb(collection) {
	
	const records = reactive({
		[collection]: []
	})
	
	const getRecords = async () => {
        try {
			const result = await db.getAllFromIndex(collection, 'created')
			result.forEach(record => records[collection].push(record))
        } catch(error) {
            console.error(error)
        }
    }
    
	const createRecord = async(record) => {
        let id, newRecord, result
        try {
            id = generateId()
            newRecord = _clonedeep(record)
            newRecord.id = generateId()
            newRecord.created = Date.now()
            // records[id] = newRecord
			result = await db.add(collection, newRecord)
			console.log(result)
            // result = await restRequest({method:'post', module, data:newRecord})
            // if(!result.ok) {delete records[id]}
        } catch(error) {
            console.error(error)
        } finally {
            id = null
            newRecord = null
            result = null
        }
    }
    return {records, getRecords, createRecord}
}