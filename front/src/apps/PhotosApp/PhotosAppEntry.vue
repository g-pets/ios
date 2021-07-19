<template lang="pug">
.app.photos-app.flex-column-container
	router-view
</template>

<script>
import { onMounted, onUnmounted } from "vue"
import useStore from "~/store/store"
export default {
	setup() {
		document.title = "Photos App | iOS 1.0"
		const { recordsToStore, cleanStore } = useStore("photos")
		onMounted(() => recordsToStore())
		onUnmounted(() => cleanStore())
	}
}
</script>


<style lang="stylus" scoped>
.app.photos-app
	background: #fff
</style>