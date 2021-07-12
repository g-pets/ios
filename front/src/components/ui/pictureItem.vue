<template lang="pug">
.picture-item
	blurhash(:blurhash="photo.blur_hash")
	picture(ref="aPicture" :class="{loaded: imgLoaded}")
		source(
			v-for="source in sources"
			sizes="100px"
			:srcset="source.srcset"
			:type="`image/${source.type}`")
		img(ref="img" loading="lazy" @load="onImgLoad" :src="`https://images.unsplash.com/${photo.path}&crop=entropy&cs=srgb&fm=jpeg&ixid=${photo.ixid}&ixlib=rb-1.2.1&q=80&w=200`")
</template>

<script>
import blurhash from '~/components/atoms/blurhash.vue'
export default {
	name: "pictureItem",
	components: { blurhash },
	props: {
		photo: Object
	},
	data() {
		return {
			imgLoaded: false,
			pictureWidth: ""
		}
	},
	
	computed: {
		sources() {
			let sources = []
			let types = ['webp','jpeg']
			let sizes = [400,200,100]
			types.forEach(type => {
				let set = {type: type, srcset: []}
				
				sizes.forEach(size => set.srcset.push(`https://images.unsplash.com/${this.photo.path}?crop=entropy&cs=srgb&fm=${type}&ixid=${this.photo.ixid}&ixlib=rb-1.2.1&q=80&w=${size} ${size}w`))
				sources.push(set)
			})
			return sources
		}	
	},
	methods: {
		onImgLoad() {
			this.imgLoaded = true
		},
		pictureWidthCalc() {
			this.pictureWidth = this.$refs.aPicture.clientWidth
		}
	},
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