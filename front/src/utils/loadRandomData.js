"use strict"
import generateData from "./DataGenerator"
import { openDB } from 'idb'

async function createStores(collections) {
	try {
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
	} catch(error) {
		console.log(error)
	}
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


async function fetchRandomData() {
	let options, response, data
	const apiUrl = 'http://10.0.1.4:85/v1/idata'
	try {
		options = {
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				'Access-Control-Max-Age': '86400',
			}
		}
		response = await fetch(`${apiUrl}`)
		data = await response.json()
		return data.data
	} catch(error) {
		console.error(`Catch in fetchRandomData: ${error}`)
		return {error: error.message}
	} finally {
		options = null
		response = null
		data = null
	}
}


export default async function loadRandomData() {
	let randomData, collections
	try {
		randomData = await generateData()
		collections = Object.keys(randomData)
		await createStores(collections)
		collections.forEach(collection => saveRandomData(collection, randomData[collection]))
		return true
	} catch(error) {
		console.log(error)
	} finally {
		randomData = null
		collections = null
	}
}