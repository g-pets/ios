<template lang="pug">
//- .header Photo Albums
.albums-view.section-scrolled
	navigation-bar(title="Photo Albums" sticky)
	.albums
		.album(v-for="album in records" @click="openAlbum(album.id)")
			//- img.cover(src="/temp/screens/calculatorApp.jpg")
			picture-item.cover(:photo="album.photos[0]")
			.title {{album.title}}
			.amount ({{album.photos.length}})
			glyph(name="arrow_more")
		
//- .screenshot
</template>


<script>
import useStore from "~/store/store"
import { useRouter } from "vue-router"
import { computed } from "vue"
import pictureItem from '~/components/ui/pictureItem.vue'
import navigationBar from '~/components/ui/navigationBar.vue'

export default {
	name: "photosApp",
	components: { pictureItem, navigationBar },
	setup() {
		document.title = "Photos App | iOS"
		const router = useRouter()
		const { records } = useStore('photos')
		const allPhotos = computed(() => {
			let allPhotos = []
			records.value.forEach(album => {
				allPhotos.push(album.photos)
			})
			return allPhotos.flat(1)
		})

		function openAlbum(id) {
			router.push({name: 'photosApp_album', params: {id}})
		}

		return { records, allPhotos, openAlbum }
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
#A7A7A7
.navigation-bar
	gradient-v50(rgba(#000,0.35), rgba(#000,0.5), rgba(#000,0.6), rgba(#000,0.6))
.album
	display: flex
	background: #fff
	color: #000
	padding-right: 0.5em
	align-items: center
	border-bottom: 1px solid #EBEBEB
	.cover
		flex: 0 0 20%
		object-fit: cover
	.title
		font-weight: bold
		padding-left: 0.5em
	.amount
		color: #959595
		margin-left: 0.7em
	svg.icon-arrow_more
		margin-left: auto
		width: 1em

</style>