<template lang="pug">
.app.text-app
	router-view.content
</template>

<script>
export default {
	name: "textApp",
}
</script>

<style lang="stylus" scoped>
.text-app
	height: 100%
	background: #fff
	display: flex
	flex-direction: column
	.content
		height: 420px
		// flex: 1 0 auto
		overflow: scroll
</style>