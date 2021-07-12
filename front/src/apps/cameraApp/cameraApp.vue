<template lang="pug">
.app.camera-app
	//- canvas(ref="cameraSensor")
	video(ref="cameraView" autoplay playsinline)
	//- img(ref="cameraOutput" src="//:0" alt="")
	//- button(ref="cameraTrigger") Take a picture
	.controls
		button(ref="cameraTrigger") Take a picture
//- .screenshot
</template>


<script>
import { ref } from "vue"
export default {
	name: "cameraApp",
	setup() {
		document.title = "Camera App | iOS"
		let constraints = { video: { facingMode: "user" }, audio: false }
		const cameraView = ref(null)
		const cameraOutput = ref(null)
		const cameraSensor = ref(null)
		const cameraTrigger = ref(null)
		let track
		function cameraStart() {
			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(function(stream) {
					track = stream.getTracks()[0];
					cameraView.value.srcObject = stream;
				})
				.catch(function(error) {
					console.error("Oops. Something is broken.", error);
				});
		}

		// cameraStart()

		return { cameraView, cameraOutput, cameraSensor, cameraTrigger }
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
.app.camera-app
	background: #181918
	display: flex
	flex-direction: column
	width: 100%
	height: 100%
	video
		object-fit: cover
		flex: 1 0 auto
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
</style>