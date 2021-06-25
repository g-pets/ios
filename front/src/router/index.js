import { createWebHistory, createRouter } from "vue-router"

// Views
const lockScreen = () => import('~/views/lockScreen.vue')
const homeScreen = () => import('~/views/homeScreen.vue')

// Apps
const textApp = () => import('~/apps/textApp.vue')
const calendarApp = () => import('~/apps/calendarApp.vue')
const photosApp = () => import('~/apps/photosApp.vue')
const cameraApp = () => import('~/apps/cameraApp.vue')
const youTubeApp = () => import('~/apps/youTubeApp.vue')
const stocksApp = () => import('~/apps/stocksApp.vue')
const mapsApp = () => import('~/apps/mapsApp.vue')
const weatherApp = () => import('~/apps/weatherApp.vue')


// Clock App
// const clockApp = () => import('~/apps/clockApp.vue')
const clockApp = () => import('~/apps/clockApp/clockApp.vue')
const clockApp_worldClock = () => import('~/apps/clockApp/worldClock.vue')
const clockApp_alarm = () => import('~/apps/clockApp/alarm.vue')
const clockApp_stopwatch = () => import('~/apps/clockApp/stopwatch.vue')
const clockApp_timer = () => import('~/apps/clockApp/timer.vue')


const calculatorApp = () => import('~/apps/calculatorApp.vue')
const notesApp = () => import('~/apps/notesApp/startScreen.vue')
const noteScreen = () => import('~/apps/notesApp/noteScreen.vue')
const settings = () => import('~/apps/settings.vue')
const phoneApp = () => import('~/apps/phoneApp.vue')
const mailApp = () => import('~/apps/mailApp.vue')
const safariApp = () => import('~/apps/safariApp.vue')
const iPodApp = () => import('~/apps/iPodApp.vue')

// Routes
const routes = [
	{
		path: "/",
		name: "lockScreen",
		component: lockScreen
	}, {
		path: "/home",
		name: "homeScreen",
		component: homeScreen
	}, {
		path: "/apps/clock",
		// name: "clockApp",
		component: clockApp,
		children: [
			{
				path: "world-clock",
				name: "clockApp_worldClock",
				component: clockApp_worldClock,
				meta: {title: "World Clock"}
			}, {
				path: "alarm",
				name: "clockApp_alarm",
				component: clockApp_alarm,
				meta: {title: "Alarm"}
			}, {
				path: "stopwatch",
				name: "clockApp_stopwatch",
				component: clockApp_stopwatch,
				meta: {title: "Stopwatch"}
			}, {
				path: "timer",
				name: "clockApp_timer",
				component: clockApp_timer,
				meta: {title: "Timer"}
			}, {
				path: "",
				redirect: { name: "clockApp_worldClock" },
			}
		]
	}, {
		path: "/apps/text",
		name: "textApp",
		component: textApp
	}, {
		path: "/apps/calendar",
		name: "calendarApp",
		component: calendarApp
	}, {
		path: "/apps/photos",
		name: "photosApp",
		component: photosApp
	}, {
		path: "/apps/camera",
		name: "cameraApp",
		component: cameraApp
	}, {
		path: "/apps/youtube",
		name: "youTubeApp",
		component: youTubeApp
	}, {
		path: "/apps/stocks",
		name: "stocksApp",
		component: stocksApp
	}, {
		path: "/apps/maps",
		name: "mapsApp",
		component: mapsApp
	}, {
		path: "/apps/weather",
		name: "weatherApp",
		component: weatherApp
	// }, {
	// 	path: "/apps/clock",
	// 	name: "clockApp",
	// 	component: clockApp
	}, {
		path: "/apps/calculator",
		name: "calculatorApp",
		component: calculatorApp
	}, {
		path: "/apps/notes",
		name: "notesApp",
		component: notesApp
	}, {
		path: "/apps/notes/:id",
		name: "noteScreen",
		component: noteScreen
	}, {
		path: "/apps/settings",
		name: "settings",
		component: settings
	}, {
		path: "/apps/phone",
		name: "phoneApp",
		component: phoneApp
	}, {
		path: "/apps/mail",
		name: "mailApp",
		component: mailApp
	}, {
		path: "/apps/safari",
		name: "safariApp",
		component: safariApp
	}, {
		path: "/apps/ipod",
		name: "iPodApp",
		component: iPodApp
	}, {
		path: "/:pathMatch(.*)*",
		redirect: { name: "Home Screen" },
	}
]
export default createRouter({
	history: createWebHistory(),
	routes
})