<template lang="pug">
.view.view-lockscreen
	.time 9:41
	.slide
</template>

<script>
export default {
	name: "LockScreen",
	
};
</script>

<style lang="stylus">
.view-lockscreen
	background-image: url("/img/wallpapers/001.jpg")
	width: 100%
	height: 100%
	background-repeat: no-repeat
	background-size: cover
	display: flex
	flex-direction: column
	.time
		color: #fff
		text-align: center
		font-size: 3em
		background: linear-gradient(180deg, rgba(#888,0.5) 0%, rgba(#888,0.3) 49%, rgba(#000,0.6) 51%, rgba(#000,0.4) 100%)
	.slide
		margin-top: auto
		width:100%
		height: 140px
		background: linear-gradient(180deg, rgba(#888,0.5) 0%, rgba(#888,0.3) 49%, rgba(#000,0.6) 51%, rgba(#000,0.4) 100%)
</style>