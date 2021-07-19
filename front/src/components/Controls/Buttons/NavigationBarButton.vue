<template lang="pug">
button.navigation-bar-button(:class="type")
	.label(v-if="label") {{label}}
	glyph(v-if="glyph" :name="glyph")
</template>

<script>
export default {
	props: {
		label: String,
		glyph: String,
		type: String,
	}
}
</script>

<style lang="stylus" scoped>
.navigation-bar-button
	flex: 0 1 auto
	font-size: 0.75em
	background: linear-gradient(180deg, #96a6bd 0%, #617ca1 50%, #43608a 100%)
	border-radius: 0.4em
	box-shadow: inset 0 0 0 1px rgba(#000,0.3), 0 1px 0 rgba(#fff,0.2)
	.label
		text-shadow: 0px -0.05em 0 rgba(#000,.5)
		padding: 0.6em 0.5em 0.6em
		font-weight: bold
		line-height: 1
		color: #fefefe
		text-overflow: ellipsis
		overflow: hidden
		white-space: nowrap
	svg.icon
		width: 1.2em
		height: 1.2em
		margin: 0.5em
		fill: #fefefe
		filter: drop-shadow(0 -1px 0 rgba(#000,.4))
	// &.back
	// 	position: relative
	// 	margin-left: 1.2em
	// 	border-radius: 0.1em 0.4em 0.4em 0.1em
	// 	&:before
	// 		position: absolute
	// 		transform-origin: 50% 50%
	// 		transform: rotate(45deg)
	// 		box-shadow: inset 0 0 0 1px rgba(#000,0.3), 5px 2px 0 rgba(#fff,0.2)
	// 		content: ''
	// 		width: 1.8em
	// 		height: 1.8em
	// 		border-radius: 0.2em
	// 		background: linear-gradient(135deg, #96a6bd 0%, #617ca1 50%, #43608a 100%)
	// 		mask-image: -webkit-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)
	// 		top: 0.27em
	// 		left: -0.8em
</style>