<template lang="pug">
.app.photos-app.flex-column-container
	router-view
</template>


<script>
import useStore from "~/store/store"
import { ref, onMounted, onUnmounted } from "vue"
export default {
	name: "photosApp",
	setup() {
		document.title = "Photos App | iOS"
		const { recordsToStore, cleanStore } = useStore('photos')
		onMounted(() => recordsToStore())
		onUnmounted(() => cleanStore())
	}
}
</script>

<style lang="stylus" scoped>
.screenshot
	position: absolute
	top: 0
	left: 0
	background-image: url("/temp/screens/calculatorApp.jpg")
	width: 320px
	height: 480px
	background-repeat: no-repeat
	background-size: cover
	z-index: 8
	opacity: 1
	opacity: 0.5
	border-bottom: 2px solid red
	pointer-events: none
.app.photos-app
	background: #fff
</style>