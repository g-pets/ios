<template lang="pug">
foreignObject.html-icon(x="0" y="0")
	.icon-body
		.icon-content
			svg(viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg")
				g.mainGear
					path.main-gear(fill="url(#gearGradient)" fill-rule="evenodd" clip-rule="evenodd" d="M107.4 30.2l3.2 15 13.9-6.5-.6 15.3 15.1-3-4.2 14.8 15.4.6-7.7 13.4 14.8 4.3-10.6 11.1L160 103l-13 8.2 11 10.7-14.5 5 8.2 13-15.3 1.3 4.8 14.5-15.2-2.4 1.2 15.4-14.2-6-2.5 15.2-12.3-9.2-6 14.1-9.8-11.8-9.3 12.2-6.6-13.8-12 9.6-3.1-15-14 6.5.6-15.3-15 3 4.2-14.8-15.4-.6 7.6-13.4-14.7-4.3L15.3 114 2 106.3 15 98 3.9 87.3l14.6-5-8.2-13 15.3-1.2-4.8-14.6 15.1 2.4-1.1-15.4 14.1 6 2.5-15.2 12.4 9.2 6-14.1 9.8 11.9L88.9 26l6.6 13.9 12-9.7zm4.5 29.1a53.9 53.9 0 0123 38l-24.1.7A30 30 0 0094.5 77l6.8-23.2c3.7 1.4 7.2 3.3 10.6 5.6zm-1.8 53c-2.3 7.9-7.5 14-14.1 17.7l8.1 22.8a53.8 53.8 0 0031.1-45.4l-24.1.6c-.2 1.5-.5 2.9-1 4.3zM73 132.6a29.9 29.9 0 01-12-6.7l-19.1 14.7a54.2 54.2 0 0052.9 15.6l-8.1-22.8c-4.5.8-9.1.6-13.7-.8zM52.6 95.4c.4-1.4 1-2.8 1.5-4.1l-20-13.7a54 54 0 001.6 55.1L54.9 118a29.9 29.9 0 01-2.3-22.5zm-12.8-26l20 13.6a30 30 0 0125.1-9L91.7 51a54 54 0 00-51.9 18.5z")
					circle.middle(fill="url(#innerCircleGradient)" cx="81" cy="105" r="12")
					circle.center(fill="url(#innerCircleGradient)" cx="81" cy="105" r="6" transform="rotate(180 81 105)")
				
				use.leftGear(href="#smallGear" width="123" height="123" x="-51" y="107")
				use.rightGear(href="#smallGear" width="123" height="123" x="90" y="107")
				
				defs
					symbol(id="smallGear" viewBox="0 0 126 125")
						path(fill="url(#gearGradient)" d="M62 0l5 11 7-10 3 12 8-9 1 12 10-6-2 11 11-4-3 11 11-2-6 10h12l-7 9 11 2-9 8 11 4-10 6 10 6-12 4 9 8-12 1 7 10-12-1 5 10-11-3 3 12-11-6 1 12-10-7-1 12-8-9-4 11-6-10-6 10-4-11-8 9-1-12-10 7 1-11-11 5 3-11-11 3 4-11-11 1 6-9-11-2 8-8-11-3 10-7-11-5 11-4-9-8 11-2-8-9h12l-6-10 12 2-4-11 11 4-2-12 10 7 1-12 9 8 2-12 7 10 5-11z")
						circle(fill="#888" cx="62.5" cy="62.6" r="40" stroke="#777" stroke-width="2")
					linearGradient(id="gearGradient" gradientTransform="rotate(90)" gradientUnits="objectBoundingBox")
						stop(stop-color="#fff")
						stop(offset=".7" stop-color="#444")
					linearGradient(id="innerCircleGradient" gradientTransform="rotate(90)" gradientUnits="objectBoundingBox")
						stop(stop-color="#666")
						stop(offset="1" stop-color="#eee")
</template>

<style lang="stylus" scoped>
.icon-body
	height: 100%
	width: 100%
	background: #E2E3E4
	background: radial-gradient(54.72% 43.06% at 3.06% 3.06%, #A1A5AA 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(55.56% 53.33% at 100% 0%, #444444 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(100% 32.52% at 100% 57.22%, #696B70 18.94%, rgba(220, 226, 234, 0) 100%), radial-gradient(47.5% 51.11% at 2.5% 97.5%, #555555 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(31.3% 31.62% at 100% 100%, #F6F6F6 32.29%, rgba(255, 255, 255, 0) 100%), #E2E3E4
	padding: 3.4em
	.icon-content
		position: relative
		overflow: hidden
		border-radius: 10em
		box-shadow: 0 0 0.5em 0.6em rgba(#fff,0.5)
		background: #333
		// Glare
		&:after
			content: ''
			width: 100%
			height: 50%
			position: absolute
			top: 0
			left: 0
			border-radius: 0 0 50% 50%/0 0 35% 35%
			background: linear-gradient(180deg, rgba(#fff, .7) 0%, rgba(#fff, .15) 100%)
	svg
		background: #333
		background: url('/img/appIcons/settingsAppIconBg.png')
		background-size: 8%
		border-radius: 10em
		overflow: hidden
		box-shadow: inset 0 2em 3em #000
		.main-gear
			filter: drop-shadow(0px 0.6em 0.2em rgba(#000, 0.5))
	
</style>