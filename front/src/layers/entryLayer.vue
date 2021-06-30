<template lang="pug">
glyphs-set
status-bar.section-fixed
router-view
systemDialog(
	v-if="needRefresh"
	title="Update available"
	content="New version of this App is available."
	:buttons="[{label: 'Cancel', method: cancelUpdate}, {label: 'Update', method: updateServiceWorker}]")

</template>


<script>
import glyphsSet from "~/components/svg/glyphs/glyphsSet.vue"
import statusBar from "~/components/ui/statusBar.vue"
import systemDialog from "~/components/ui/systemDialog.vue"
import appState from "~/store/appState"
import { useRegisterSW } from "virtual:pwa-register/vue"
import {onMounted} from "vue"
export default {
	name: "entryLayer",
	components: { glyphsSet, statusBar, systemDialog },
	setup() {
		const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
		const { runApp } = appState()
		const cancelUpdate = async() => {
			offlineReady.value = false
			needRefresh.value = false
		}
		onMounted(() => runApp())
		return { needRefresh, updateServiceWorker, cancelUpdate }
	}
}
</script>