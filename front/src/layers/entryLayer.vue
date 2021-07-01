<template lang="pug">
basic-glyphs-set
status-bar.section-fixed
router-view
</template>


<script>
import basicGlyphsSet from "~/components/svg/glyphs/basicGlyphsSet.vue"
import appState from "~/store/appState"
import statusBar from "~/components/ui/statusBar.vue"
import {onMounted} from "vue"
export default {
	name: "entryLayer",
	components: { basicGlyphsSet, statusBar },
	setup() {
		const { runApp } = appState()
		onMounted(() => runApp())
	}
}
</script>