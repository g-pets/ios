<template lang="pug">
.app-container
	icons-set
	.status-bar
	router-view
</template>

<script>
import iconsSet from '~/components/icons/icons-set.vue'
export default {
	name: "App",
	components: {iconsSet},
};
</script>

<style lang="stylus">
@import "./assets/styles/index.styl"
.app-container
	width: 100vw
	height: 100vh
	background: #000
	.status-bar
		background: #333
		height: 1em
</style>