<template lang="pug">
glyphs-set
router-view
systemDialog(
	v-if="needRefresh"
	title="Update available"
	content="New version of this App is available."
	:buttons="[{label: 'Cancel', method: cancelUpdate}, {label: 'Update', method: updateServiceWorker}]")
</template>


<script>
import glyphsSet from "~/components/svg/glyphs/glyphsSet.vue"
import systemDialog from "~/components/ui/systemDialog.vue"
import { useRegisterSW } from "virtual:pwa-register/vue"
// import { activityWatcher } from "~/core/ActivityWatcher"
export default {
	name: "entryLayer",
	components: { glyphsSet, systemDialog },
	setup() {
		const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
		const cancelUpdate = async() => {
			offlineReady.value = false
			needRefresh.value = false
		}
		// activityWatcher()
		return { needRefresh, updateServiceWorker, cancelUpdate }
	}
}
</script>