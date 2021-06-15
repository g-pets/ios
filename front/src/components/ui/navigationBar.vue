<template lang="pug">
.navigation-bar(:style="style")
	.group.left
		.back(v-if="back" @click="goBack") {{back}}
	.title {{title}}
	.group.right
		slot(name="btn")
</template>

<script>
export default {
	name: "textApp",
	props: {
		title: String,
		back: String,
		background: Array,
		data: Object
	},
	computed: {
		style() {
			let style = []
			if(this.background) style.push(`background: linear-gradient(180deg, ${this.background[0]} 0%, ${this.background[1]} 50%, ${this.background[2]} 100%)`)
			return style
		}
	},
	methods: {
		goBack() {
			this.$router.back()
		}
	}
}
</script>

<style lang="stylus">
.navigation-bar
	background: linear-gradient(180deg, #875D52 0%, #51372F 50%, #3B2D21 100%)
	color: #EFF1F2
	padding: 0.5em
	text-align: center
	display: flex
	justify-content: space-between
	align-items: center
	z-index: 2
	position: sticky
	top: 0
	.group
		width: 5em
		&.right
			display: flex
			justify-content: flex-end
			.add-note
				padding: 0.2em 0.4em
				line-height: 1
				border: 1px solid #222
				border-radius: 0.3em
</style>