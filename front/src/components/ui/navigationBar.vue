<template lang="pug">
.navigation-bar.section-fixed
	.group.left
		slot(name="left")
	.group.center
		.title(v-if="title") {{title}}
		slot(name="center")
	.group.right
		slot(name="right")
</template>

<script>
export default {
	name: "navigationBar",
	props: {
		title: String
	}
}
</script>

<style lang="stylus" scoped>
.navigation-bar
	background: linear-gradient(180deg, #c1cbdb 0%, #8093b3 50%, #577398 100%)
	box-shadow: inset 0 -1px 0 rgba(#000,0.3), inset 0 1px 0 rgba(#fff,0.5)
	color: #fffffa
	padding: 0.45em 0.3em
	text-align: center
	display: flex
	justify-content: space-between
	align-items: center
	.title
		text-shadow: 0px -0.05em 0 rgba(#000,.5)
		font-size: 1.3em
		font-weight: bold
		line-height: 1
		padding-top: 0.2em
		letter-spacing: -0.02em
	.group
		min-width: 6em
		// flex: 0 0 auto
		display: flex
		&.left
			justify-content: flex-start
		&.center
			justify-content: center
			// width: 5em
		&.right
			justify-content: flex-end
</style>