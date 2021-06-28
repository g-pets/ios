"use strict"
import generateData from "~/generator"
import { openDB } from 'idb'
import _clonedeep from "lodash.clonedeep"



async function createStores(collections) {
	openDB('iOS', 1, {
		upgrade(db) {
			collections.forEach(collection => {
				let store = db.createObjectStore(collection, {
					keyPath: 'id',
					autoIncrement: false,
				});
				store.createIndex('id', 'id')
			})
		}
	})
}


async function saveRandomData(collection, data) {
	try {
		const db = await openDB('iOS', 1)
		let transaction = db.transaction(collection, 'readwrite')
		data.forEach(record => transaction.objectStore(collection).add(record))
		db.close()
	} catch(error) {
		console.log(error)
	}
}


export default async function loadRandomData() {
	let randomData = await generateData()
	let collections = Object.keys(randomData)
	await createStores(collections)
	collections.forEach(collection => saveRandomData(collection, randomData[collection]))
}