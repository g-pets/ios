"use strict"
import { ref, reactive } from "vue"
import { useRouter } from 'vue-router'
// import loadRandomData from './loadRandomData.js'


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
		if (window.indexedDB) throw 'IndexedDB not detected'
		return true
	} catch(error) {
		console.error(error)
		throw Error
	}
	
}

const installationState = reactive({
	localStorage: false,
	indexedDB: false,
	generateData: false
})

const installed = ref(false)

const runInstallation = async () => {
	try {
		const router = useRouter()
		console.info('Installation...')
		installationState.localStorage = await localStorageTest()
		installationState.indexedDB = await indexedDBTest()
		// installationState.generateData = await loadRandomData()
		
		localStorage.setItem("installed", true)
		router.push({name: 'lockScreen'})
	} catch (error) {
		console.error('Application not installed')
	}
}

export { runInstallation, installationState, installed }