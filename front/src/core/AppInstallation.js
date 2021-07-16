"use strict"
import { reactive } from "vue"
import { useRouter } from 'vue-router'
import loadRandomData from './GetRandomData.js'
import { registerSW } from "virtual:pwa-register"
import deviceControl from "~/store/deviceState"




function localStorageTest() {
	let x, y, storage
	try {
		storage = window.localStorage
		x = 'localStorageTest'
		storage.setItem(x,x)
		y = storage.getItem(x)
		if(x !== y) throw 'LocalStorage not detected'
		storage.removeItem(x)
		return true
	} catch(error) {
		console.error(error)
		throw Error
	}
}

function indexedDBTest() {
	try {
		if(!window.indexedDB) throw 'IndexedDB not detected'
		return true
	} catch(error) {
		console.error(error)
		throw Error
	}
	
}
   

const installationState = reactive({
	localStorage: false,
	indexedDB: false,
	fetchDataset: false,
	serviceWorker: false
})


const runInstallation = async () => {
	try {
		const router = useRouter()
		installationState.localStorage = await localStorageTest()
		installationState.indexedDB = await indexedDBTest()
		installationState.fetchDataset = await loadRandomData()
		installationState.serviceWorker = await registerSW()
		const { appInstalled } = deviceControl()
		appInstalled(true)
		router.push({name:'LockScreen'})
	} catch (error) {
		console.error('Application not installed')
	}
}

export { runInstallation, installationState }