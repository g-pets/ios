<template lang="pug">
.app-container
	.screen
		router-view
	.phone-body.section-fixed
		.home-button(@click="goHome")
</template>

<script>
import { useRouter } from 'vue-router'
// import {onMounted} from "vue"
// import { useRegisterSW } from "virtual:pwa-register/vue"
// import install from '~/install.js'
export default {
	name: "App",
	data() {
		return {
			ready: true,
		}
	},
	methods: {
		goHome() {
			this.$router.push({name: 'homeScreen'})
		}
	},
	setup() {
		const router = useRouter()
		// const {offlineReady, needRefresh, updateServiceWorker} = useRegisterSW()
		
		let installed = localStorage.getItem('installed')
		router.beforeEach((to, from, next) => {
			if (to.name !== 'loadingScreen' && !installed) next({ name: 'loadingScreen' })
			else next()
		})
		// return {needRefresh, updateServiceWorker, cancelUpdate}
	}
};
</script>

<style lang="stylus">
@import "./assets/styles/index.styl"
.app-container
	height: 100vh
	width: 100vw
	display: flex
	flex-direction: column
	.screen
		height: 100%
		width: 100%
		background: #000
	.phone-body
		padding: 1em 0.3em
		border-top: 0.2em solid #262A2D
		.home-button
			margin: auto
			display: block
			cursor: pointer
			width: 7rem
			height: 7rem
			position: relative
			border-radius: 50%
			overflow: hidden
			background: linear-gradient(180deg, rgba(#fff, 0.02) 50%, rgba(#fff, 0.3) 100%)
			box-shadow: 0 -1px 0 #222
			// outline: 1px solid #222
			&:before, &:after
				content: ''
				position: absolute
				top: 0
				left: 0
			&:before
				margin: auto
				border-radius: 0.3em
				border: 1px solid #999
				width: 30%
				height: 30%
				right: 0
				bottom: 0
				z-index: 1
			&:after
				width: 100%
				height: 75%
				background: #000
				border-radius: 50% 50% 50% 50%/50% 50% 25% 25%			
</style>