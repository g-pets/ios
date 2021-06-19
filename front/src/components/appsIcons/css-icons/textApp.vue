<template lang="pug">
.text-app-icon
	icon-glare
</template>

<script>
import iconGlare from '../src/iconGlare.vue'
export default {
	name: "textAppIcon",
	components: {iconGlare}
};
</script>

<style lang="stylus" scoped>
.text-app-icon
	background: linear-gradient(180deg, #29A621 43.75%, #1AD010 100%)	
</style>