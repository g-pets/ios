<template lang="pug">
canvas.blurhash-placeholder(ref="canvas" width="32" height="32")
</template>

<script>
import { decode } from "blurhash"
import { ref, onMounted } from "vue"
export default {
	props: {
		blurhash: String
	},
	setup(props) {
		const canvas = ref(null)
		onMounted(() => {
			try {
				const pixels = decode(props.blurhash, 32, 32)
				const imageData = new ImageData(pixels, 32, 32)
				const ctx = canvas.value.getContext('2d')
				ctx.putImageData(imageData, 0, 0)
			} catch(error) {
				console.log(error)
			}
		})
		
		return { canvas }
	}
}
</script>

<style lang="stylus" scoped>
canvas.blurhash-placeholder
	width: 100%
	height: 100%
	display: block
</style>