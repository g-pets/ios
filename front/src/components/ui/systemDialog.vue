<template lang="pug">
//- img(src="/screens/systemDialog.png")
.system-dialog
	uiGlare(height="1.2em" opacity="0.7")
	.title(v-if="title") {{title}}
	.content(v-if="content") {{content}}
	.buttons(v-if="buttons")
		button(v-for="button in buttons" @click="button.method")
			uiGlare(height="45%" opacity="0.7" borderRadius="0")
			.label {{button.label}}
</template>

<script>
import uiGlare from '~/components/atoms/uiGlare.vue'
export default {
	name: "systemDialog",
	components: {uiGlare},
	props: {
		title: String,
		content: String,
		buttons: Array
	}
}
</script>

<style lang="stylus" scoped>
img
	width: 28rem
	margin: auto
	position: absolute
	z-index: 100
	top: 1em
	left: 0
	right: 0
.buttons
	display: flex
	margin-top: 0.8em
button
	flex: 1 1 50%
	padding: 0.5em
	background: rgba(#fff,0.1)
	position: relative
	font-size: 1.1em
	font-weight: bold
	border-radius: 0.3em
	background-image: linear-gradient(180deg, rgba(#131F41, .7) 50%, rgba(#192a59, .7) 100%)
	overflow: hidden
	text-shadow: 0px -0.05em 0 #000
	+ button
		margin-left: 0.5em
	&:hover
		background-image: linear-gradient(180deg, rgba(#3d4866, .7) 50%, rgba(#4c5a7f, .7) 100%)

.system-dialog
	width: 27rem
	height: max-content
	padding: 0.5em
	padding-top: 0.7em
	overflow: hidden
	line-height: 1.2
	text-align: center
	text-shadow: 0px -0.05em 0 #000
	color: #fdfdfd
	background: rgba(#0b1b44,.8)
	box-shadow: 0 0.2em 0.4em rgba(#000,0.5), inset 0 0 0 0.1rem rgba(#fff,0.2)
	border-radius: 0.7em
	position: absolute
	z-index: 100
	top: 0
	left: 0
	right: 0
	bottom: 0
	margin: auto
	.title
		font-weight: bold
		font-size: 1em
	.content
		margin-top: 0.5em
		font-size: 0.9em
</style>