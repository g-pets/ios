<template lang="pug">
.next.app-icon
	svgNotesIcon
	.name Notes
</template>

<script>
import svgNotesIcon from "./icons/tempApp.vue"
export default {
	name: "appIconNext",
	components: {svgNotesIcon},
};
</script>

<style lang="stylus" scoped>
.next.app-icon
	cursor: pointer
	svg
		width: 3.5em
		height: 3.5em
		overflow: hidden
		border-radius: 0.7em
	.name
		margin-top: 0.5em
		text-align: center
		font-size: 0.7em
		color: #ccc
		line-height: 1
</style>