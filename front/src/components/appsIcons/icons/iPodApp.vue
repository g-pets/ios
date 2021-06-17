<template lang="pug">
.ipod-app-icon
	icon-glare
</template>

<script>
import iconGlare from '../src/iconGlare.vue'
export default {
	name: "ipodAppIcon",
	components: {iconGlare}
};
</script>

<style lang="stylus" scoped>
.ipod-app-icon
	background: linear-gradient(180deg, #FF7407 43%, #FFBA0C 100%)
</style>