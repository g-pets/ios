<template lang="pug">
.glossy-layer(:style="{ height, opacity, borderRadius }")
</template>

<script>
export default {
	props: {
		height: String,
		opacity: String,
		borderRadius: String
	}
}
</script>

<style lang="stylus" scoped>
.glossy-layer
	width: 100%
	position: absolute
	border-radius: 0 0 50% 50%/0 0 35% 35%
	top: 0
	left: 0
	background: linear-gradient(180deg, rgba(#fff, .5) 0%, rgba(#fff, .2) 100%)
</style>