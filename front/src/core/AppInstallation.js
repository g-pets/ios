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
		// console.info('Installation...')
		// await setTimeout(function(){
		// 	installationState.localStorage = localStorageTest()
		// 	console.log('1. localStorageTest')
		// }, 500)
		// await setTimeout(function(){
		// 	installationState.indexedDB = indexedDBTest()
		// 	console.log('2. indexedDBTest')
		// }, 700)
		// await setTimeout(function(){
		// 	installationState.fetchDataset = loadRandomData()
		// 	console.log('3. loadRandomData')
		// }, 1000)
		// await setTimeout(function(){
		// 	installationState.serviceWorker = registerSW()
		// 	console.log('4. registerSW')
		// }, 1500)
		// await setTimeout(function(){
		// 	const { appInstalled } = deviceControl()
		// 	appInstalled(true)
		// 	router.push({name:'lockScreen'})
		// 	console.log('5. Router')
		// }, 2000)
		installationState.localStorage = await localStorageTest()
		installationState.indexedDB = await indexedDBTest()
		installationState.fetchDataset = await loadRandomData()
		installationState.serviceWorker = await registerSW()
		const { appInstalled } = deviceControl()
		appInstalled(true)
		router.push({name:'LockScreen'})
		
		
		
		// console.log('Installed!')
	} catch (error) {
		console.error('Application not installed')
	}
}

export { runInstallation, installationState }