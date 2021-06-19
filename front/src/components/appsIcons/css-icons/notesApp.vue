<template lang="pug">
.notes-app-icon
	icon-head(:gradient=['#7B584C', '#45322C'])
	.body
</template>

<script>
import iconHead from '../src/iconHead.vue'
export default {
	name: "notesAppIcon",
	components: {iconHead}
};
</script>

<style lang="stylus" scoped>
.notes-app-icon
	.body
		width: 100%
		height: 2.5em
		background: #FBF8A0
</style>