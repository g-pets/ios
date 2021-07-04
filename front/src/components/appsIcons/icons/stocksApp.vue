<template lang="pug">
foreignObject.html-icon.icon-glare(x="0" y="0")
	.icon-body
		svg.chart(fill="none" viewBox="0 0 1000 760")
			path.axis(d="M283 0h17v733h399.99V0h17v733h282.99v17H0v-17h283V0z")
			g.h-lines(mask="url(#graphMask)")
				template(v-for="l in 14")
					use.line(href="#line" :y="l * 34")
			path.trend-line(d="M-18 238.5s48-28 80-28 32.5 19 59.5 19 103-131 140-131S301 165 333 165s17.5-42.5 58.5-42.5 46 89 92.5 89S578.5 1 636 1s55 147 93 147 13.5-56.5 53.5-55.5 59 119 100.5 119S931.5 55 964.5 55s63.5 67.5 63.5 67.5")
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
		.trend-line
			stroke: #fff
			stroke-width: 2em
			transform: translateY(226px)
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