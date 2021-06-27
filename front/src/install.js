"use strict"
import loadRandomData from '~/helpers/loadRandomData.js'
export default async function install() {
	if (localStorage.getItem('installed')) return
	console.log('Installation')
	await loadRandomData()
	localStorage.setItem("installed", true)
}