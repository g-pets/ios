<template lang="pug">
.app.camera-app
	.viewfinder.coming-soon
		h2 Coming Soon
	.controls
		button(ref="cameraTrigger")
			glyph(name="camera")
</template>


<script>
export default {
	setup() {
		document.title = "Camera App | iOS"
	}
}
</script>


<style lang="stylus" scoped>
.app.camera-app
	background: #3C3C3C
	display: flex
	flex-direction: column
	width: 100%
	height: 100%
	.viewfinder
		flex: 1 0 auto
		background: #3C3C3C
	.controls
		padding: 0.5em
		background: #777
		background: linear-gradient(180deg, #FEFFFF 0%, #7D7E83 100%)
		display: flex
		justify-content: center
		button
			background: transparent
			border-radius: 5em
			border: 1px solid #6A6B70
			padding: 0 2em
			svg
				width: 1.5em
				height: 2em
				fill: #2E2E2D
</style>