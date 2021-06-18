<template lang="pug">
.app-container
	systemDialog(
		v-if="needRefresh"
		title="Update available"
		content="New version of this App is available."
		:buttons="[{label: 'Cancel', method: cancelUpdate}, {label: 'Update', method: updateServiceWorker}]")
	systemDialog(
		v-else
		title="iOS 1.0 App"
		content="Coming Soon")
</template>

<script>
import { useRegisterSW } from "virtual:pwa-register/vue"
import systemDialog from '~/components/ui/systemDialog.vue'
export default {
	name: "App",
	components: {systemDialog},
	setup() {
		const {offlineReady, needRefresh, updateServiceWorker} = useRegisterSW()
		const cancelUpdate = async() => {
			offlineReady.value = false
			needRefresh.value = false
		}
		return {needRefresh, updateServiceWorker, cancelUpdate}
	}
};
</script>

<style lang="stylus">
@import "./assets/styles/index.styl"
.app-container
	width: 100vw
	height: 100vh
	background: #000
	position: relative
</style>