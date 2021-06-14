<template lang="pug">
.app-container
	icons-set
	status-bar
	router-view
</template>

<script>
import iconsSet from '~/components/icons/iconsSet.vue'
import statusBar from '~/components/statusBar.vue'
export default {
	name: "App",
	components: {iconsSet, statusBar},
};
</script>

<style lang="stylus">
@import "./assets/styles/index.styl"
.app-container
	width: 100vw
	height: 100vh
	background: #000
</style>