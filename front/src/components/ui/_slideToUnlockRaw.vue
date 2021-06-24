<template lang="pug">
.slide-to-unlock(ref="container")
	.toggle(ref="toggle" @mousedown="dragStart" @touchstart="dragStart")
		svg.arrow(fill="none" viewBox="0 0 160 160")
			path(d="M6 54h81V26l67 54-67 54v-28H6V54z")
	.overlay(:style="{opacity: (sliderStyle/300).toFixed(2)}")
	.text slide to unlock
</template>

<script>
import {ref} from 'vue'
export default {
	setup() {
		const container = ref(null)
		const toggle = ref(null)
		let outerRect = null
		let lockRect = null
		let dragProps = ref(null)
		let sliderStyle = ref()
		let isTouch = "ontouchstart" in document.documentElement

		function getX(event) {
			if (isTouch === true) return event.touches[0].pageX
			else return event.clientX
		}

		function clamp(value, min, max) {
			return Math.min(Math.max(value, min), max);
		}

		function dragStart(e) {
			outerRect = container.value.getBoundingClientRect()
			lockRect = toggle.value.getBoundingClientRect()
			var x = getX(e);
			dragProps = {
				start: lockRect.left - outerRect.left,
				mouseStart: x,
				newX: 0,
			};
			toggle.value.classList.add("dragging");
			document.addEventListener("mousemove", dragLock, false);
			document.addEventListener("touchmove", dragLock, false);
			document.addEventListener("mouseup", dragStop);
			document.addEventListener("touchend", dragStop);
		}

		function dragStop(reset) {  
			toggle.value.classList.remove('dragging');
			if (reset !== false) {
				toggle.value.style.left = '0px'
				sliderStyle.value = 0
			}
			document.removeEventListener('mousemove', dragLock, false)
			document.removeEventListener('touchmove', dragLock, false)
			document.removeEventListener('mouseup', dragStop)
			document.removeEventListener('touchend', dragStop)
		}
		
		function unlock() {
			container.value.classList.add("unlocked")
			dragStop(false)
			toggle.value.removeEventListener("mousedown", dragStart)
			toggle.value.removeEventListener("touchstart", dragStart)
		}

		function dragLock(e) {
			e.preventDefault()
			var posX = getX(e)
			var mouseDiff = posX - dragProps.mouseStart,
				maxX = outerRect.width - lockRect.width,
				newX = dragProps.start + mouseDiff,
				newX = clamp(newX, 0, maxX);

			toggle.value.style.left = newX + "px"
			sliderStyle.value = newX
			if (newX >= maxX) {
				unlock();
			}
		}

		

		return {container, toggle, dragStart, sliderStyle}
		
		

		

		
	}
}
</script>

<style lang="stylus">
.slide-to-unlock
	overflow: hidden
	position: relative
	width: 100%
	max-width: 300px
	margin: auto
	padding: 0.2em
	background: linear-gradient(180deg, rgba(#000,0.8) 0%, rgba(#000,0.7) 49%, rgba(#000,0.4) 50%, rgba(#000,0.1) 100%)
	box-shadow: 0 0 0 1px rgba(#fff,0.2)
	border-radius: 0.6em
	.toggle
		height: 100%
		padding: 0.3em 1em
		display: inline-block
		background: linear-gradient(180deg, #FEFEFE 0%, #DDDDDD 49%, #CFCFCF 50%, #A1A1A1 100%)
		border-radius: 0.4em
		cursor: pointer
		position: relative
		z-index: 2
		left: 0
		transition: left 0.3s ease-out
		&.dragging 
			transition: none
		.arrow
			width: 2.3em
			fill: #8b8b8b
	.overlay
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%
		background: #000
		opacity: 0
		z-index: 1
	.text
		position: absolute
		pointer-events: none
		top: 0
		padding: 0.5em 0
		text-indent: 4em
		line-height: 1.2
		font-size: 1.5em
		font-weight: 300
		background: linear-gradient(left, #4d4d4d, 0.4, #4d4d4d, 0.5, white, 0.6, #4d4d4d, #4d4d4d)
		background: -webkit-gradient(linear,left top,right top,color-stop(0, #4d4d4d),color-stop(0.4, #4d4d4d),color-stop(0.5, white),color-stop(0.6, #4d4d4d),color-stop(1, #4d4d4d))
		-moz-background-clip: text
		-webkit-background-clip: text
		-moz-text-fill-color: transparent
		-webkit-text-fill-color: transparent
		animation: slidetounlock 5s infinite
		width: 200%
		-webkit-text-size-adjust: none
		white-space: nowrap
	@keyframes slidetounlock
		0%
			background-position: -320px 0
		100%
			background-position: 320px 0



.container 
	width 80%
	text-align center
	margin 0 auto
.outer 
	background #000
	display inline-block
	width 100%
	position relative
	.lock 
		width 4em
		height 2.5em
		background #555
		cursor pointer
		position relative
		left 0%
		transition background 0.2s ease-out, left 0.3s ease-out
		&.dragging 
			transition none
			background green
	&.unlocked
		opacity 0.8
		.lock 
			background #24cf02
			cursor none
</style>