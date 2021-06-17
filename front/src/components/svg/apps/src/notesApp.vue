<template>
<svg class="svg-app-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
	<mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
		<path fill="#fff" d="M0 0h180v180H0z" />
	</mask>
	<g mask="url(#a)">
		<path fill="url(#notesApp_paint0-linear)" d="M0 0h180v180H0z" />
		<path
			d="M0 76.5h180M0 94.5h180m-180 18h180m-180 18h180m-180 18h180m-180 18h180"
			stroke="#E3E0A2"
			stroke-width="3"
		/>
		<g filter="url(#notesApp_filter0)">
			<path d="M0 54h180v3H93.5L0 60v-6z" fill="#FBF8A0" />
		</g>
		<path
			d="M25.5 180V54m6 126V54"
			stroke="#880B0B"
			stroke-opacity=".16"
			stroke-width="3"
		/>
		<path fill="url(#notesApp_paint1-linear)" d="M0 0h180v54H0z" />
	</g>
	<defs>
		<linearGradient
			id="notesApp_paint0-linear"
			x1="90"
			y1="0"
			x2="90"
			y2="180"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#FCF9B2" />
			<stop offset="1" stop-color="#FBF79F" />
		</linearGradient>
		<linearGradient
			id="notesApp_paint1-linear"
			x1="90"
			y1="0"
			x2="90"
			y2="54"
			gradientUnits="userSpaceOnUse"
		>
			<stop offset=".14" stop-color="#7B584C" />
			<stop offset="1" stop-color="#45322C" />
		</linearGradient>
		<filter
			id="notesApp_filter0"
			x="-5"
			y="51"
			width="190"
			height="16"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
			/>
			<feOffset dy="2" />
			<feGaussianBlur stdDeviation="2.5" />
			<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
			<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
			<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
		</filter>
	</defs>
</svg>
</template>