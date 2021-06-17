<template lang="pug">
svg.icon.app-icon(:class="`icon-${name}`")
	use(:xlink:href="`#icon_${name}`")
</template>

<script>
	export default {
		props: {
			name: String
		}
	}
</script>

<style lang="stylus" scoped>
svg.app-icon
	width: 3.5em
	height: 3.5em
	overflow: hidden
	border-radius: 0.7em
	background: #fff
</style>