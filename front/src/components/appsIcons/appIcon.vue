<template lang="pug">
.app-item(@click="openApp")
	svg.app-icon(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" :style="jiggleEffect")
		component(:is="name")
	.app-title {{title}}
//- .app-item.png
//- 	img.app-icon(:src="`/img/apps/${name}.png`")
//- 	.app-title {{title}}
</template>

<script>
import notesApp from './icons/notesApp.vue'
import calendarApp from './icons/calendarApp.vue'
import clockApp from './icons/clockApp.vue'
import iPodApp from './icons/iPodApp.vue'

import phoneApp from './icons/phoneApp.vue'
import textApp from './icons/textApp.vue'
// import tempIcon from './icons/tempIcon.vue'

// import {defineAsyncComponent} from 'vue'
export default {
	name: "appIcon",
	components: {notesApp, calendarApp, textApp, phoneApp, iPodApp, clockApp},
	props: {
		name: String,
		router: String,
		title: String
	},
	computed: {
		jiggleEffect() {
			let delay = this.randomNumber(50,750) / 100
			let duration = this.randomNumber(10,20)
			return `animation-delay: -.${delay}s; animation-duration: .${duration}s`
		},
		// iconComponent() {
		// 	return defineAsyncComponent(() => import(`./icons/${this.name}.vue`))
		// }
	},
	methods: {
		openApp() {
			this.$router.push({name: this.router})
		},
		randomNumber(min, max) {
			return Math.round(Math.random() * (max - min) + min)
		}
	}
}
</script>

<style lang="stylus" scoped>
.app-item
	cursor: pointer
	text-align: center
	.app-icon
		width: 100%
		overflow: hidden
		border-radius: 0.7em
		position: relative
	.app-title
		margin-top: 0.5em
		font-size: 0.7em
		color: #ccc
		line-height: 1
	
	:deep(.html-icon)
		width: 100%
		height: 100%
		.icon-header
			height: 300px
		.icon-title
			color: #fff
			text-align: center
			font-size: 10em
			line-height: 1
			padding: 0.6em 0 0.3em
			font-family: Helvetica
			font-weight: bold
			text-shadow: 0px -0.05em 0 rgba(#000,.5)
		&.icon-glare
			position: relative
			&:before
				content: ''
				position: absolute
				top: 0
				left: 0
				width: 100%
				height: 55%
				background: red
				border-radius: 0 0 50% 50%/0 0 35% 35%
				background: linear-gradient(180deg, rgba(#fff, .6) 0%, rgba(#fff, .2) 100%)

</style>