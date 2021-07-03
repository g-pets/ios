<template lang="pug">
foreignObject.html-icon.icon-glare(x="0" y="0")
	.icon-body
		svg.chart(fill="none" viewBox="0 0 1000 760")
			path.axis(d="M283 0h17v733h399.99V0h17v733h282.99v17H0v-17h283V0z")
			g.h-lines(mask="url(#graphMask)")
				template(v-for="l in 14")
					use.line(href="#line" :y="l * 34")
			path.spline(fill-rule="evenodd" d="M0 462v-38c16-7 38-15 57-15 21 0 32 7 41 12l1 1c6 4 9 6 16 6l3-2 14-13 31-36a5832 5832 0 0148-55l21-17c6-4 15-8 25-8 15 0 26 7 34 16 8 8 14 18 18 26l1 1c5 9 8 15 12 19 3 4 5 5 6 5 3 0 4-1 4-2 2-1 3-3 5-9h1v-1c3-6 8-14 16-20 8-7 19-11 33-11 17 0 30 10 38 20 8 9 14 21 20 31a2440 2440 0 0019 30c5 6 10 8 15 8l5-4c5-4 10-11 15-20a10459 10459 0 0136-71c12-26 26-54 40-75 7-10 15-20 24-27 8-8 19-13 32-13 23 0 39 15 48 31a246 246 0 0126 66c4 15 8 27 13 37a45 45 0 007 12l3-1a48 48 0 005-14c2-7 4-17 11-25 7-10 19-15 34-15 19 0 32 14 40 26 9 12 17 28 24 42l1 1c7 16 14 29 21 39 8 9 12 11 14 11l2-2 8-12a347 347 0 0019-58l15-49c4-8 8-16 13-22s13-13 25-13c14 0 26 7 35 14l5 5v59l-11-17c-5-8-11-15-17-20-4-4-8-6-10-6l-7 13c-5 12-9 28-14 45l-2 7c-6 19-12 40-20 57-3 8-8 16-14 22-7 7-16 12-27 12-19 0-33-14-42-26s-17-28-24-43h-1c-7-15-14-28-21-38-8-11-12-12-13-12l-5 1c-2 2-3 6-5 13v2c-2 6-4 15-10 23-7 10-18 17-33 17-11 0-20-6-25-12-6-7-10-14-14-22a397 397 0 01-17-52c-6-19-11-35-18-47-8-11-14-14-19-14-2 0-5 0-10 4-5 5-11 11-17 21-12 18-25 43-37 70l-4 8c-11 23-23 47-34 66-6 10-13 20-20 27s-17 14-30 14c-18 0-31-9-41-20-10-10-17-23-23-34v-1c-6-11-11-20-17-26-5-7-9-8-11-8-7 0-10 2-11 3l-7 9v1c-3 5-6 12-11 17-8 8-17 13-30 13-15 0-26-9-33-17a699 699 0 00-29-45c-4-4-6-5-9-5h-1l-6 3-15 13a544 544 0 00-45 51 830 830 0 01-51 55c-5 4-13 9-22 9-19 0-29-7-37-12h-1c-6-4-11-7-22-7-12 0-29 6-45 13l-12 5zm963-174zm-85 122zm-153-63z" clip-rule="evenodd")
			defs
				mask(id="graphMask")
					use(href="#graph" fill="url(#maskGradient)")
				linearGradient(id="maskGradient" gradientTransform="rotate(90)" gradientUnits="objectBoundingBox")
					stop(stop-color="#999")
					stop(offset="1" stop-color="#000")
				symbol(id="line" y="226")
					path(fill="#fff" d="M0 0h1000v16H0z")
				symbol(id="graph")
					path(d="M0 439.29s41.18-16.44 68-13c23.85 3.08 29 24.48 56.5 24.48S232 313.41 262 313.41s45.5 70.93 73.5 70.93 14.5-41.96 55-41.96 47.5 86.91 83.99 86.91c36.5 0 101.5-212.29 161-212.29s60.5 147.86 96.5 147.86 16-51.45 49.5-51.45 56 115.88 98.5 115.88 51.99-156.84 86.99-156.84c35 0 33 27.47 33 27.47V733H0V439.29z")
		.months
			.month Jul
			.month Aug
			.month Sep
</template>

<style lang="stylus" scoped>
.icon-body
	height: 100%
	width: 100%
	background: linear-gradient(180deg, #1F67D5 60%, #58E3FC 100%)
	svg.chart
		margin-top: 6em
		.axis
			fill: rgba(#fff,0.4)
			filter: drop-shadow(0px .1em .6em rgba(#000, 0.5))
		.spline
			fill: #fff
			filter: drop-shadow(0px 2em 1em rgba(#000, 0.2))
	.months
		display: flex
		justify-content: space-between
		line-height: 1
		margin-top: 1.1em
		.month
			display: inline-block
			font-size: 6.2em
			font-weight: bold
			color: #fff
			text-shadow: 0px 0.05em 0.1em rgba(#000,.4)
</style>