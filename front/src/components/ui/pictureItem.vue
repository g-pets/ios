<template lang="pug">
.picture-item
	blurhash(:blurhash="photo.blur_hash")
	picture(:class="{loaded}")
		source(
			sizes="100px"
			type="image/webp"
			:srcset="`https://images.unsplash.com/${photo.path}?crop=entropy&cs=srgb&fm=webp&ixid=${photo.ixid}&ixlib=rb-1.2.1&q=80&w=400 400w, https://images.unsplash.com/${photo.path}?crop=entropy&cs=srgb&fm=webp&ixid=${photo.ixid}&ixlib=rb-1.2.1&q=80&w=200 200w, https://images.unsplash.com/${photo.path}?crop=entropy&cs=srgb&fm=webp&ixid=${photo.ixid}&ixlib=rb-1.2.1&q=80&w=100 100w`")
		source(
			sizes="100px"
			type="image/jpeg"
			:srcset="`https://images.unsplash.com/${photo.path}?crop=entropy&cs=srgb&fm=jpeg&ixid=${photo.ixid}&ixlib=rb-1.2.1&q=80&w=400 400w, https://images.unsplash.com/${photo.path}?crop=entropy&cs=srgb&fm=jpeg&ixid=${photo.ixid}&ixlib=rb-1.2.1&q=80&w=200 200w, https://images.unsplash.com/${photo.path}?crop=entropy&cs=srgb&fm=jpeg&ixid=${photo.ixid}&ixlib=rb-1.2.1&q=80&w=100 100w`")
			
		img(loading="lazy" @load="onLoaded" :src="`https://images.unsplash.com/${photo.path}?crop=entropy&cs=srgb&fm=jpeg&ixid=${photo.ixid}&ixlib=rb-1.2.1&q=80&w=200`")
</template>

<script>
import blurhash from '~/components/atoms/blurhash.vue'
import { ref } from "vue"
export default {
	name: "pictureItem",
	components: { blurhash },
	props: {
		photo: Object
	},
	setup() {
		const loaded = ref(false)
		const onLoaded = () => loaded.value = true
		return {loaded, onLoaded}
	}
}
</script>

<style lang="stylus" scoped>
.picture-item
	position: relative
	picture
		width: 100%
		height: 100%
		position: relative
		transition: opacity 0.15s
		opacity: 0
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%
		z-index: 2
		&.loaded
			opacity: 1
		img
			object-fit: cover
			display: block
			width: 100%
			height: 100%
</style>