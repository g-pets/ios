<template lang="pug">
.album-view.section-scrolled(v-if="album")
	navigation-bar(:title="album.title" sticky)
		template(#left)
			navigation-bar-button(label="Photo Albums" @click="goToAlbums()")
	.album-grid
		.grid-photo-cell(v-for="photo in album.photos")
			picture-item(:photo="photo")
</template>


<script>
import { computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import useStore from "~/store/store"
export default {
	setup() {
		const router = useRouter()
		const route = useRoute()
		const { records } = useStore("photos")
		const albumId = route.params.id
		const album = computed(() => records.value.find(record => record.id === albumId))
		const goToAlbums = () => router.push({name: "PhotosAppAlbums"})
		return { album, goToAlbums}
	}
}
</script>

<style lang="stylus" scoped>
@import "../../assets/Styles/mixins.styl"
.album-view
	position: relative
.navigation-bar
	gradient-v50(rgba(#000,0.35), rgba(#000,0.5), rgba(#000,0.6), rgba(#000,0.6))
	.navigation-bar-button
		gradient-v50(#6F6F6F, #323232, #010101, #040404)
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
			width: 100%
			position: absolute
			top: 0
			left: 0
</style>