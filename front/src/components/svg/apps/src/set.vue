<template>
	<svg class="apps-icon-set" viewBox="0 0 0 0" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<!-- Helpers -->

			<!-- Header Gradient -->
			<linearGradient id="app-icon-head-gradient" x1="90" y1="0" x2="90" y2="54" gradientUnits="userSpaceOnUse">					
				<stop offset=".14" stop-color="#7B584C"/>
				<stop offset="1" stop-color="#45322C"/>
			</linearGradient>

			<!-- Header Drop Shadow -->
			<filter
				id="notesApp_filter0-next"
				x="-5"
				y="51"
				width="190"
				height="16"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
				<feOffset dy="2" />
				<feGaussianBlur stdDeviation="2.5" />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
				<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
			</filter>


			
			
			<!-- Notes App -->
			<symbol id="icon_notesAppNext" class="app-icon-notes-app" viewBox="0 0 180 180">
				<g mask="url(#iconMask)">
					<path class="notes-body" fill="#FBF79F" d="M0 0h180v180H0z" />
					<path
						class="notes-h-lines"
						d="M0 76.5h180M0 94.5h180m-180 18h180m-180 18h180m-180 18h180m-180 18h180"
						stroke="#E3E0A2"
						stroke-width="3"
					/>
					<g filter="url(#notesApp_filter0-next)">
						<path d="M0 54h180v3H93.5L0 60v-6z" fill="#FBF8A0" />
					</g>
					<path
						class="notes-v-lines"
						d="M25.5 180V54m6 126V54"
						stroke="#880B0B"
						stroke-opacity=".16"
						stroke-width="3"
					/>
					<path class="app-icon-head notes-head" fill="url(#app-icon-head-gradient)" d="M0 0h180v54H0z" />
				</g>
				<defs>
					<mask id="iconMask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
						<path fill="#fff" d="M0 0h180v180H0z" />
					</mask>
				</defs>
			</symbol>
		</defs>
	</svg>
</template>

<style lang="stylus" scoped>
.apps-icon-set
	// display: none
	height: 0
	width: 0
	position: absolute
	visibility: hidden
	.app-icon-head
		box-shadow: 10px 10px 5px solid
	.app-icon-notes-app
		display: none
	.notes-body
		fill: red
</style>