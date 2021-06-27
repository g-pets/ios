"use strict"
import { openDB } from 'idb'
import _clonedeep from "lodash.clonedeep"


const generateId = () => {
	return JSON.stringify(Date.now())
}



async function getRandomData() {
	try {
		let response = await fetch('http://localhost:85/v1/ios')
		return await response.json()
	} catch(error) {
		console.log(error)
	}
}

async function createSores(collections) {
	openDB('iOS', 1, {
		upgrade(db) {
			collections.forEach(collection => {
				let store = db.createObjectStore(collection, {
					// keyPath: 'id',
					autoIncrement: true,
				});
				store.createIndex('created', 'created')
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
	let randomData = await getRandomData()
	let collections = Object.keys(randomData)
	await createSores(collections)
	collections.forEach(collection => saveRandomData(collection, randomData[collection]))
}