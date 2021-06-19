<template lang="pug">
.phone-app-icon
	icon-glare
</template>

<script>
import iconGlare from '../src/iconGlare.vue'
export default {
	name: "phoneAppIcon",
	components: {iconGlare}
};
</script>

<style lang="stylus" scoped>
.phone-app-icon
	background: linear-gradient(180deg, #29A621 43.75%, #1AD010 100%)
</style>