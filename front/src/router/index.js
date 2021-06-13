import { createWebHistory, createRouter } from "vue-router"

// Views
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
const clockApp = () => import('~/apps/clockApp.vue')
const calculatorApp = () => import('~/apps/calculatorApp.vue')
const notesApp = () => import('~/apps/notesApp.vue')
const settings = () => import('~/apps/settings.vue')

// Routes
const routes = [
	{
		path: "/",
		name: "homeScreen",
		component: homeScreen
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
	}, {
		path: "/apps/clock",
		name: "clockApp",
		component: clockApp
	}, {
		path: "/apps/calculator",
		name: "calculatorApp",
		component: calculatorApp
	}, {
		path: "/apps/notes",
		name: "notesApp",
		component: notesApp
	}, {
		path: "/apps/settings",
		name: "settings",
		component: settings
	}, {
		path: "/:pathMatch(.*)*",
		redirect: { name: "Home Screen" },
	}
]
export default createRouter({
	history: createWebHistory(),
	routes
})