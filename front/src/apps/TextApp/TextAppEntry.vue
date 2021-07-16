<template lang="pug">
.app.text-app.flex-column-container
	router-view
</template>


<script>
import { onMounted, onUnmounted } from "vue"
import useStore from "~/store/store"
export default {
	setup() {
		document.title = "Text App | iOS"
		const { recordsToStore, cleanStore } = useStore("conversations")
		onMounted(() => recordsToStore())
		onUnmounted(() => cleanStore())
	}
}
</script>


<style lang="stylus" scoped>
.app.text-app
	background: #DBE1EE
</style>