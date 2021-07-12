<template lang="pug">
.album-view.section-scrolled
	navigation-bar(:title="album.title" sticky)
		template(#left)
			navigation-bar-button(label="Photo Albums" @click="goToAlbums()")
	.album-grid
		.grid-photo-cell(v-for="photo in album.photos")
			picture-item(:photo="photo")
			//- img.photo(:src="src")
	//- .control-panel
	//- p {{album}}
//- .screenshot
</template>


<script>
import useStore from "~/store/store"
import navigationBar from '~/components/ui/navigationBar.vue'
import navigationBarButton from '~/components/buttons/navigationBarButton.vue'
import pictureItem from '~/components/ui/pictureItem.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed } from "vue"
export default {
	name: "photosAppAlbum",
	components: { navigationBar, navigationBarButton, pictureItem },
	setup() {
		const router = useRouter()
		const route = useRoute()
		const { records } = useStore('photos')
		const album = computed(() => {
			let id = route.params.id
			return records.value.find(record => record.id === id)
		})
		document.title = `Photos App - ${album.value.title} | iOS`

		const goToAlbums = () => router.push({name: 'photosApp_albums'})
		return { album, goToAlbums}
	}
}
</script>

<style lang="stylus" scoped>
@import "../../assets/styles/basic/mixins.styl"
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
.album-view
	position: relative
.navigation-bar
	gradient-v50(rgba(#000,0.35), rgba(#000,0.5), rgba(#000,0.6), rgba(#000,0.6))
	.navigation-bar-button
		gradient-v50(#6F6F6F, #323232, #010101, #040404)
.control-panel
	background: rgba(#000,0.5)
	width: 100%
	height: 3em
	position: absolute
	left: 0
	bottom: 0
	z-index: 5
.album-grid
	display: grid
	grid-template-columns: repeat(4, 1fr)
	grid-auto-rows: 1fr
	gap: 0.3em
	padding: 0.3em
	.grid-photo-cell
		position: relative
		padding-top: 100%
		.picture-item
			display: block
			width: 100%
			height: 100%
			position: absolute
			top: 0
			left: 0
</style>