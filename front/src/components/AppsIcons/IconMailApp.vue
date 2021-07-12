<template lang="pug">
.icon-body.glossy
	svg.letter(fill="none" viewBox="0 0 600 400")
		g(mask="url(#letterMask)")
			//- Base
			path(fill="#EEEDF2" d="M0 0h600v400H0z")
			//- Bottom
			g(filter="url(#bottomTriangleFilter)")
				path(fill="#E5EBEE" d="M300 90l311 328H-11L300 90z")
			//- Light Gradient
			path(fill="url(#letterWhiteGradient)" d="M0 0h600v400H0z")
			//- Top Shadow
			g(filter="url(#topShadow)")
				path(fill="#FEFEFE" fill-opacity=".01" d="M318.1 214.003c-9.852 10.34-26.348 10.34-36.2 0L78 0h444L318.1 214.003z")
			//- Top
			g(filter="url(#topTriangleFilter)")
				path(fill="#FBFBFB" d="M315.633 227.474c-9.137 7.32-22.129 7.32-31.266 0L-12-10h624L315.633 227.474z")
		
		defs
			mask(id="letterMask" width="600" height="400" x="0" y="0" maskUnits="userSpaceOnUse")
				rect(width="600" height="400" fill="#fff" rx="10")
			linearGradient(id="letterWhiteGradient" x1="300" x2="300" y1="0" y2="400" gradientUnits="userSpaceOnUse")
				stop(offset=".25" stop-color="#F6F8F8")
				stop(offset=".5417" stop-color="#F4F6F6" stop-opacity=".8")
				stop(offset="1" stop-color="#F4F6F7" stop-opacity="0")
			
			filter(id="bottomTriangleFilter" width="622" height="340" x="-11" y="78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse")
				feFlood(flood-opacity="0" result="BackgroundImageFix")
				feColorMatrix(in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
				feOffset(dy="-12")
				feColorMatrix(values="0 0 0 0 0.333333 0 0 0 0 0.333333 0 0 0 0 0.333333 0 0 0 1 0")
				feBlend(in2="BackgroundImageFix" result="effect1_dropShadow")
				feBlend(in="SourceGraphic" in2="effect1_dropShadow" result="shape")
			
			filter(id="topShadow" width="544" height="321.758" x="28" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse")
				feFlood(flood-opacity="0" result="BackgroundImageFix")
				feColorMatrix(in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
				feOffset(dy="50")
				feGaussianBlur(stdDeviation="25")
				feColorMatrix(values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0")
				feBlend(in2="BackgroundImageFix" result="effect1_dropShadow")
				feBlend(in="SourceGraphic" in2="effect1_dropShadow" result="shape")
			
			filter(id="topTriangleFilter" width="632" height="250.964" x="-16" y="-10" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse")
				feFlood(flood-opacity="0" result="BackgroundImageFix")
				feColorMatrix(in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
				feOffset(dy="20")
				feGaussianBlur(stdDeviation="5")
				feColorMatrix(values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0")
				feBlend(in2="BackgroundImageFix" result="effect1_dropShadow")
				feBlend(in="SourceGraphic" in2="effect1_dropShadow" result="shape")
</template>

<style lang="stylus" scoped>
.icon-body
	background: url('/img/appIcons/mailAppClouds.png') no-repeat bottom center, linear-gradient(180deg, #1F67D5 52%, #62E6FD 100%) 
	background-size: contain
	display: flex
	svg
		width: 60%
		height: auto
		margin: auto
		position: relative
		box-shadow: 0 0.8em 2em rgba(#000,0.4)
</style>