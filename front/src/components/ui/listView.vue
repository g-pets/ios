<template lang="pug">
.list-view
	.list-item(v-for="item in list" :class="{missed: item.missed}")
		.number {{$phoneNumber(item.number)}}
		.time {{$unixTime(item.created)}}
		glyph(name="arrow_more")
</template>

<script>
export default {
	name: "listView",
	props: {
		list: Array
	},
}
</script>

<style lang="stylus" scoped>
@import "../../assets/styles/basic/mixins.styl"
.list-view
	height: 100%
	background: #fff
	.list-item
		// background: #fff
		color: #000
		padding: 0.5em 0.45em 0.45em
		border-bottom: 1px solid #E8E8E8
		font-size: 1.3em
		font-weight: bold
		display: flex
		align-items: center
		line-height: 1
		&.missed
			color: #B1292D
		.number
			margin-right: auto
			padding-top: 0.1em
		.time
			font-size: 0.65em
			color: #4B6C99
			padding-top: 0.3em
			// align-self: end
		svg.icon-arrow_more
			width: 1.15em
			height: 1.15em
			margin-left: 0.5em
			gradient-v50(#81A1CA, #5C8CCA, #3D6DAF, #436CAC)
			border-radius: 50%
			padding: 0.15em
			border: 0.1em solid #FBF6FA
			box-shadow: 0 0.01em 0.05em 0.01em rgba(#000,0.5)
			fill: #fff
</style>