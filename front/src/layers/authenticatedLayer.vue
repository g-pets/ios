<template lang="pug">
router-view
systemDialog(
	v-if="needRefresh"
	title="Update available"
	content="New version of this App is available."
	:buttons="[{label: 'Cancel', method: cancelUpdate}, {label: 'Update', method: updateServiceWorker}]")
</template>


<script>
import { useRegisterSW } from "virtual:pwa-register/vue"
export default {
	setup() {
		const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
		const cancelUpdate = async() => {
			offlineReady.value = false
			needRefresh.value = false
		}
		return { needRefresh, updateServiceWorker, cancelUpdate }
	}
}
</script>