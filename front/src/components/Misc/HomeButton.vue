<template lang="pug">
.home-button(@click="$router.push({name: 'HomeScreen'})")
</template>

<style lang="stylus">
.home-button
	margin: 0 auto
	cursor: pointer
	width: 7rem
	height: 7rem
	position: relative
	border-radius: 50%
	overflow: hidden
	background: linear-gradient(180deg, rgba(#fff, .02) 50%, rgba(#fff, .3) 100%)
	box-shadow: 0 -0.1rem 0 #222
	&:before, &:after
		content: ''
		position: absolute
		top: 0
		left: 0
	&:before
		margin: auto
		border-radius: .3em
		border: 0.1em solid #999
		width: 30%
		height: 30%
		right: 0
		bottom: 0
		z-index: 1
	&:after
		width: 100%
		height: 75%
		background: #000
		border-radius: 50% 50% 50% 50%/50% 50% 25% 25%			
</style>