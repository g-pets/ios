<template lang="pug">
.albums-view.section-scrolled
	navigation-bar(title="Photo Albums" sticky)
	table-view(:list="records" v-slot="records")
		.list-item.album(@click="openAlbum(records.item.id)")
			picture-item.cover(:photo="records.item.photos[0]")
			.title {{records.item.title}}
			glyph(name="arrow_more")
</template>


<script>
import { useRouter } from "vue-router"
import useStore from "~/store/store"
export default {
	setup() {
		document.title = "Photos App | iOS"
		const router = useRouter()
		const { records } = useStore("photos")
		const openAlbum = (id) => router.push({name: "PhotosAppAlbum", params: {id}})
		return { records, openAlbum }
	}
}
</script>


<style lang="stylus" scoped>
@import "../../assets/styles/mixins.styl"
.navigation-bar
	gradient-v50(rgba(#000,0.35), rgba(#000,0.5), rgba(#000,0.6), rgba(#000,0.6))
.album
	padding: 0 0.5em 0 0
	.cover
		flex: 0 0 20%
		object-fit: cover
	.title
		font-weight: bold
		padding-left: 0.5em
</style>