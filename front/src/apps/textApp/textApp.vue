<template lang="pug">
.app.text-app.flex-column-container
	router-view
</template>


<script>
import useStore from "~/store/store"
import { onMounted, onUnmounted } from 'vue'
export default {
	name: "textApp",
	setup() {
		document.title = "Text App | iOS"
		const { recordsToStore, cleanStore } = useStore('conversations')
		onMounted(() => recordsToStore())
		onUnmounted(() => cleanStore())
	}
}
</script>