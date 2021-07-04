<template lang="pug">
foreignObject.html-icon(x="0" y="0")
	.icon-body
		svg.camera-lens(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 666 668")
			g.border(filter="url(#lensBorderFilter)")
				circle(cx="333" cy="331" r="331" fill="url(#lensBorderRadialGradient)")
			g.outer
				circle(cx="330" cy="330" r="320" fill="url(#lensOuterCirclesGradient)" transform="rotate(-180 331 330.994)")
				circle(cx="330" cy="330" r="320" fill="url(#lensOuterCirclesShadowGradient)" transform="rotate(-180 331 330.994)")
			g.middle
				circle(cx="331" cy="330.994" r="236" fill="url(#lensMiddleCirclesGradient)")
				circle(cx="331" cy="330.994" r="236" fill="url(#lensMiddleCirclesTopShadowGradient)" transform="rotate(-180 331 330.994)")
				circle(cx="331" cy="330.994" r="236" fill="url(#lensMiddleCirclesSidesShadowGradient)")
			g.glass
				circle(cx="331" cy="330.993" r="179" fill="url(#lensGlassGradient)" transform="rotate(-180 331 330.993)")
				circle(cx="331" cy="330.993" r="179" fill="url(#lensGlassBigLeakGradient)" fill-opacity=".8" transform="rotate(-180 331 330.993)")
				circle(cx="331" cy="330.993" r="179" fill="url(#lensGlassBottomLeakGradient)" transform="rotate(-180 331 330.993)")
				circle(cx="331" cy="330.993" r="179" fill="url(#lensGlassMiddleLeakGradient)" transform="rotate(-180 331 330.993)")
				circle(cx="331" cy="330.993" r="179" fill="url(#lensGlassTopLeakGradient)" transform="rotate(-180 331 330.993)")
				circle(cx="331" cy="330.993" r="179" fill="url(#lensGlassTintGradient)" fill-opacity=".2" transform="rotate(-180 331 330.993)")
			g.glare
				path(fill="url(#lensBottomGlareGradient)" d="M462.499 345.948c12.75 22.084-17.198 79.211-60.499 104.211-43.302 25-104.5 28.002-120.5.289-20.711-35.872 3.018-88.345 53-117.202 49.981-28.857 107.289-23.17 127.999 12.702z" opacity=".4")
				path(fill="url(#lensTopLongGlareGradient)" d="M343.757 181.539c-22.053-1.882-44.249 1.139-64.997 8.847-20.748 7.708-39.532 19.913-55.007 35.737l44.326 43.345a87.9966 87.9966 0 0132.272-20.967c12.173-4.523 25.195-6.295 38.133-5.191l5.273-61.771z")
				path(fill="url(#lensTopShortGlareGradient)" d="M213.664 237.548c-11.466 14.399-20.185 30.784-25.721 48.338l59.126 18.644c3.248-10.299 8.363-19.912 15.091-28.359l-48.496-38.623z")
  
			
			defs
				//- Gradients
				radialGradient(id="lensBorderRadialGradient")
					stop(offset=".98" stop-color="#151716")
					stop(offset=".98" stop-color="#444")
					stop(offset="1" stop-color="#97989D")

				//- Outer Gradients
				radialGradient(id="lensOuterCirclesGradient")
					stop(stop-color="#3C3C3C")
					stop(offset=".75" stop-color="#090909")
					stop(offset=".75" stop-color="#606060")
					stop(offset=".81" stop-color="#373737")
					stop(offset=".81" stop-color="#535353")
					stop(offset=".84" stop-color="#363636")
					stop(offset=".84" stop-color="#505050")
					stop(offset=".87" stop-color="#323232")
					stop(offset=".87" stop-color="#4D4D4D")
					stop(offset=".9" stop-color="#323232")
					stop(offset=".9" stop-color="#505050")
					stop(offset=".93" stop-color="#343434")
					stop(offset=".93" stop-color="#515151")
					stop(offset=".99" stop-color="#4D4D4D")
					stop(offset="1" stop-color="#373735")
				radialGradient(id="lensOuterCirclesShadowGradient" cx="0" cy="0" r="1" gradientTransform="matrix(0 640 -755.149 0 331 10.9936)" gradientUnits="userSpaceOnUse")
					stop(offset=".3" stop-opacity="0")
					stop(offset=".8" stop-opacity=".8")
				
				//- Middle Gradients
				radialGradient(id="lensMiddleCirclesGradient")
					stop(stop-color="#2C3E52")
					stop(offset=".7514" stop-color="#47555D")
					stop(offset=".7608" stop-color="#424E51")
					stop(offset=".765" stop-color="#878E92")
					stop(offset=".7673" stop-color="#242C30")
					stop(offset=".7751" stop-color="#343C3F")
					stop(offset=".7788" stop-color="#0F1113")
					stop(offset=".7915")
					stop(offset=".792" stop-color="#4C4C4C")
					stop(offset=".9122" stop-color="#3C3C3C")
					stop(offset="1" stop-color="#292929")
				radialGradient(id="lensMiddleCirclesTopShadowGradient" cx="0" cy="0" r="1" gradientTransform="matrix(0 -472 394.388 0 331 566.994)" gradientUnits="userSpaceOnUse")
					stop(offset=".7702" stop-color="#fff" stop-opacity=".05")
					stop(offset="1" stop-opacity=".46")
				linearGradient(id="lensMiddleCirclesSidesShadowGradient" x2="0" y2="100%")
					stop(stop-opacity="0")
					stop(offset=".35" stop-opacity=".75")
					stop(offset=".65" stop-opacity=".75")
					stop(offset="1" stop-opacity="0")
				//- Glass Gradients
				radialGradient(id="lensGlassGradient" cx="0" cy="0" r="1" gradientTransform="matrix(0 179 -179 0 331 330.993)" gradientUnits="userSpaceOnUse")
					stop(stop-color="#6E98B1")
					stop(offset=".25619" stop-color="#446F8E")
					stop(offset=".31954" stop-color="#375773")
					stop(offset=".34488" stop-color="#23425A")
					stop(offset=".37814" stop-color="#294D64")
					stop(offset=".40506" stop-color="#1E3C4D")
					stop(offset=".41535" stop-color="#1A293C")
					stop(offset=".48029" stop-color="#08192B")
					stop(offset=".50563" stop-color="#173445")
					stop(offset=".53252" stop-color="#173446")
					stop(offset=".54058" stop-color="#28445A")
					stop(offset=".57516" stop-color="#0C242F")
					stop(offset=".62003" stop-color="#122838")
					stop(offset=".74328" stop-color="#12283A")
					stop(offset=".76849" stop-color="#153244")
					stop(offset=".77456" stop-color="#2D4B61")
					stop(offset=".79464" stop-color="#3C5D78")
					stop(offset=".82313" stop-color="#304E68")
					stop(offset=".8292" stop-color="#1D374C")
					stop(offset=".87636" stop-color="#273745")
					stop(offset=".89181" stop-color="#142533")
					stop(offset=".94234" stop-color="#324E64")
					stop(offset=".96082" stop-color="#3B536A")
					stop(offset=".98325" stop-color="#5C727D")
					stop(offset="1" stop-color="#4B6276")
				radialGradient(id="lensGlassBigLeakGradient" cx="0" cy="0" r="1" gradientTransform="matrix(50.00003 72.50001 -101.82153 70.22177 288 272.493)" gradientUnits="userSpaceOnUse")
					stop(stop-color="#fff" stop-opacity="0.8")
					stop(offset=".72743" stop-color="#fff" stop-opacity=".01")
					stop(offset=".7689" stop-color="#fff" stop-opacity="0")
				radialGradient(id="lensGlassBottomLeakGradient" cx="0" cy="0" r="1" gradientTransform="matrix(-8.99987 -15.50002 24.31476 -14.11803 315 311.493)" gradientUnits="userSpaceOnUse")
					stop(stop-color="#fff")
					stop(offset="1" stop-color="#fff" stop-opacity="0")
				radialGradient(id="lensGlassMiddleLeakGradient" cx="0" cy="0" r="1" gradientTransform="matrix(-4 -8.50003 14.42997 -6.79054 335 339.493)" gradientUnits="userSpaceOnUse")
					stop(stop-color="#fff" stop-opacity=".55")
					stop(offset="1" stop-color="#fff" stop-opacity="0")
				radialGradient(id="lensGlassTopLeakGradient" cx="0" cy="0" r="1" gradientTransform="matrix(-4.49997 -9.50002 11.69113 -5.53786 353.5 361.993)" gradientUnits="userSpaceOnUse")
					stop(stop-color="#fff" stop-opacity=".57")
					stop(offset="1" stop-color="#fff" stop-opacity="0")
				radialGradient(id="lensGlassTintGradient" cx="0" cy="0" r="1" gradientTransform="matrix(0 190.5 -190.5 0 331 319.493)" gradientUnits="userSpaceOnUse")
					stop(stop-color="#AEECFF")
					stop(offset="1" stop-color="#C1F0FF" stop-opacity="0")
				//- Glare Gradients
				radialGradient(id="lensBottomGlareGradient" cx="0" cy="0" r="1" gradientTransform="rotate(60 -120.9165 456.55849) scale(135 235.366)" gradientUnits="userSpaceOnUse")
					stop(stop-color="#D3EDFF" stop-opacity=".12")
					stop(offset=".77083" stop-color="#C1E5FF" stop-opacity=".3")
					stop(offset=".91667" stop-color="#fff" stop-opacity=".5")
				radialGradient(id="lensTopLongGlareGradient" cx="0" cy="0" r="1" gradientTransform="rotate(100.288 27.338 303.66167) scale(150)" gradientUnits="userSpaceOnUse")
					stop(offset=".61979" stop-color="#DCF2FF" stop-opacity=".79")
					stop(offset="1" stop-color="#BBE7FF" stop-opacity=".26")
				radialGradient(id="lensTopShortGlareGradient" cx="0" cy="0" r="1" gradientTransform="rotate(100.288 27.338 303.66167) scale(150)" gradientUnits="userSpaceOnUse")
					stop(offset=".61979" stop-color="#DCF2FF" stop-opacity=".79")
					stop(offset="1" stop-color="#BBE7FF" stop-opacity=".26")

				//- Filters
				filter(id="lensBorderFilter" width="666" height="668" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse")
					feFlood(flood-opacity="0" result="BackgroundImageFix")
					feColorMatrix(in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
					feOffset(dy="4")
					feGaussianBlur(stdDeviation="1")
					feColorMatrix(values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0")
					feBlend(in2="BackgroundImageFix" result="effect1_dropShadow")
					feBlend(in="SourceGraphic" in2="effect1_dropShadow" result="shape")

</template>

<style lang="stylus" scoped>
.icon-body
	height: 100%
	width: 100%
	background: linear-gradient(180deg, #F9F9F9 0%, #8F9096 100%)
	display: flex
	.camera-lens
		width: 65%
		height: 65%
		margin: auto
</style>