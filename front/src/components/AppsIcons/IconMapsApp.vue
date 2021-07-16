<template lang="pug">
.icon-body
	svg.map(fill="none" viewBox="0 0 1000 1000")
		//- Small Streets
		g
			use.streets-border(href="#streets" stroke="url(#streetsBorderGradient)")
			use.streets-border(href="#square" stroke="url(#streetsBorderGradient)")
			use(href="#streets" fill="url(#streetsBodyGradient)")
			use(href="#square" fill="url(#streetsBodyGradient)")
			
		//- Roads
		g
			path(fill="#FFB500" d="M9 248s142 7 228-63c104 73 227 62 227 62v138s-145-13-227 72C157 374 9 384 9 384V248z")
			path(fill="#000" opacity=".1" d="M157 0h160v1000H157z")
			path(fill="url(#northRoadGradient)" d="M177 0h120v1000H177z")
			path(fill="url(#highwayGraident)" d="M0 246h1000v139H0z")
		
		//- Pin
		g
			path.pin-shadow(d="M374 747c43 0 79-17 79-38s-36-38-79-38c-44 0-80 17-80 38 0 8 5 16 14 22l-82 85 28 27 102-97 18 1z")
			ellipse(fill="#2C2A05" cx="236.5" cy="829" rx="34.5" ry="20")
			use(href="#pinBody" fill="url(#pinBodyMetalGradient)")
			use(href="#pinBody" fill="url(#pinBodyShadowGradient)")
			use(href="#pinBody" fill="url(#pinBodyHeadReflex)")
			circle(cx="236.5" cy="587.5" r="79.5" fill="url(#pinHeadGradient)")
		
		//- Badge
		g
			g(filter="url(#badgeFilter)")
				path(fill="url(#badgeGradient)" d="M572 122c34 0 64-12 83-31 2-2 6-2 8 0 19 19 49 31 85 31 35 0 65-12 85-32 2-2 5-2 7 0 36 38 56 87 56 141 0 184-211 215-237 215-25 0-237-32-237-215 0-54 20-104 56-141 2-2 6-2 8 0 19 20 49 32 86 32z")
			text.label(x="520" y="360") 280
		defs
			//- Paths
			symbol(id="streets")
				path.streets(d="M904 912a10 10 0 000-20H774V186a10 10 0 00-10-10h-43V37h279V17H721V0h-20v17H563V0h-20v17H405V0h-20v17H90V0H70v17H0v20h70v128a10 10 0 1020 0V37h295v128a10 10 0 1020 0V37h138v128a10 10 0 1020 0V37h138v149a10 10 0 0010 10h43v696h-96a10 10 0 100 20h147v88h20v-88h79z")
			symbol(id="square")
				path.square(fill-rule="evenodd" d="M0 913h312c11 0 22-3 33-8l31-17 29-21c38 10 79 19 115 18 39 0 74-12 98-44 11-15 14-33 14-49V561c0-11-1-23-6-34-26-63-79-91-130-89-52 3-102 36-123 91-3 10-4 20-4 30v123H138c-11 0-21-1-29-6-13-7-26-16-39-26l-13-10a146 146 0 00-56-28H0v21c13 2 28 11 45 24l12 9c14 10 28 20 43 28 12 7 26 8 38 8h230a538 538 0 006 113c3 14 8 28 15 39a333 333 0 01-52 33c-10 4-18 6-25 6H0v20zm389-354v133c0 22-3 44-2 66 1 18 3 36 6 53 4 15 9 27 15 36 39 10 78 19 112 18 34 0 63-10 82-36 7-10 10-23 10-37V561c0-10-1-18-4-26-23-56-68-79-111-77-44 3-87 30-105 78-3 7-3 15-3 23z" clip-rule="evenodd")
			symbol(id="pinBody")
				path(d="M213 660h48v184s-7 5-24 5c-16 0-24-5-24-5V660z")
			//- Gradients
			linearGradient(id="streetsBorderGradient" x2="0" y2="1000" gradientUnits="userSpaceOnUse")
				stop(stop-color="#EADED0")
				stop(offset="1" stop-color="#A89C87")
			
			linearGradient(id="streetsBodyGradient" x2="0" y2="1000" gradientUnits="userSpaceOnUse")
				stop(offset=".1" stop-color="#FEFEFE")
				stop(offset="1" stop-color="#DDDDDF")
			
			linearGradient(id="badgeGradient" x2="0" y2="100%")
				stop(stop-color="#ff403f")
				stop(offset=".3" stop-color="#ff403f")
				stop(offset=".3" stop-color="#ffc1bf")
				stop(offset=".35" stop-color="#ffc1bf")
				stop(offset=".35" stop-color="#007DFF")
				stop(offset="1" stop-color="#0049C8")
			
			linearGradient(id="highwayGraident" x2="0" y2="100%")
				stop(stop-color="#EDB529")
				stop(offset=".1" stop-color="#EDB529")
				stop(offset=".1" stop-color="#FFCC1D")
				stop(offset=".9" stop-color="#FFCC1D")
				stop(offset=".9" stop-color="#EDB529")
				stop(offset="1" stop-color="#EDB529")
			linearGradient(id="northRoadGradient" x2="0" y2="100%")
				stop(stop-color="#FCFF84")
				stop(offset=".5" stop-color="#FFFE60")
				stop(offset="1" stop-color="#DFD833")
			linearGradient(id="pinBodyMetalGradient")
				stop(stop-color="#B5AA77")
				stop(offset="0" stop-color="#807454")
				stop(offset="0" stop-color="#7B734D")
				stop(offset=".1" stop-color="#817A57")
				stop(offset=".1" stop-color="#DAD9C4")
				stop(offset=".3" stop-color="#F7FAF7")
				stop(offset=".4" stop-color="#A5A099")
				stop(offset=".5" stop-color="#74685C")
				stop(offset=".6" stop-color="#635B4D")
				stop(offset=".8" stop-color="#A8A2A4")
				stop(offset=".9" stop-color="#E0DCC8")
				stop(offset=".9" stop-color="#D1CEB6")
				stop(offset=".9" stop-color="#B1AD8C")
				stop(offset="1" stop-color="#97906E")
			linearGradient(id="pinBodyShadowGradient" x2="0" y1="85%" y2="100%" gradientUnits="objectBoundingBox")
				stop(stop-opacity="0")
				stop(offset="1" stop-opacity=".5")
			linearGradient(id="pinBodyHeadReflex" x2="0" y2="20%" gradientUnits="objectBoundingBox")
				stop(stop-color="red" stop-opacity=".2")
				stop(offset=".7" stop-opacity="0")
			radialGradient(id="pinHeadGradient" cx="0" cy="0" r="1" gradientTransform="matrix(60.49988 94.4996 -110.27298 70.5982 222 560)" gradientUnits="userSpaceOnUse")
				stop(offset="0" stop-color="#F8FFFF")
				stop(offset=".2" stop-color="#FF6F72")
				stop(offset=".4" stop-color="#F5292B")
				stop(offset=".6" stop-color="#C61F20")
				stop(offset=".8" stop-color="#C11B1C")
				stop(offset="1" stop-color="#EF3537")
			//- Filters
			//- filter(id="badgeFilter") // Simple
			//- 	feFlood(flood-color="#000")
			//- 	feComposite(in2="SourceAlpha" operator="out")
			//- 	feGaussianBlur(stdDeviation="2" result="blur")
			//- 	feOffset(dy="-5")
			//- 	feComposite(operator="atop" in2="SourceGraphic")
			filter(id="badgeFilter" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse") // Full
				feFlood(flood-opacity="0" result="BackgroundImageFix")
				feBlend(in="SourceGraphic" in2="BackgroundImageFix" result="shape")
				feColorMatrix(in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
				feOffset(dy="-5")
				feGaussianBlur(stdDeviation="5")
				
				feComposite(in2="hardAlpha" k2="-1" k3="1" operator="arithmetic")
				feColorMatrix(values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0")
				feBlend(in2="shape" result="effect1_innerShadow")
				feColorMatrix(in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
				feOffset(dy="10")
				feGaussianBlur(stdDeviation="2.5")
				
				feComposite(in2="hardAlpha" k2="-1" k3="1" operator="arithmetic")
				feColorMatrix(values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.42 0")
				feBlend(in2="effect1_innerShadow" result="effect2_innerShadow")
				feColorMatrix(in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
				feOffset(dy="4")
				feGaussianBlur(stdDeviation="2")
				
				feComposite(in2="hardAlpha" k2="-1" k3="1" operator="arithmetic")
				feColorMatrix(values="0 0 0 0 0.966667 0 0 0 0 0.325869 0 0 0 0 0.318194 0 0 0 1 0")
				feBlend(in2="effect2_innerShadow" result="effect3_innerShadow")
			
</template>

<style lang="stylus" scoped>
.icon-body
	background: linear-gradient(180deg, #FCFBF5 0%, #D3C9C1 100%)
	.streets-border
		stroke-width: 2em
	.pin-shadow
		fill: #000
		filter: blur(0.8em)
		opacity: .35
	.label
		fill: #fff
		font: 10em Arial, Helvetica
		font-weight: bold
		letter-spacing: 0.05em
</style>