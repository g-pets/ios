<template lang="pug">
glyphs-set
status-bar.section-fixed
router-view
</template>


<script>
import appState from "~/store/appState"
import { onMounted } from "vue"
export default {
	setup() {
		const { runApp } = appState()
		onMounted(() => runApp())
	}
}
</script>