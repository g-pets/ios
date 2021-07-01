import { createWebHistory, createRouter } from "vue-router"
// import deviceControl from "~/store/deviceState"
// const { appInstalled, deviceUnlocked } = deviceControl()

// Layers
const installationLayer = () => import('~/layers/installationLayer.vue')
const entryLayer = () => import('~/layers/entryLayer.vue')
const unauthenticatedLayer = () => import('~/layers/unauthenticatedLayer.vue')
const authenticatedLayer = () => import('~/layers/authenticatedLayer.vue')

// Views
const homeScreen = () => import('~/views/homeScreen.vue')

// Clock App
const clockApp = () => import('~/apps/clockApp/clockApp.vue')
const clockApp_worldClock = () => import('~/apps/clockApp/worldClock.vue')
const clockApp_alarm = () => import('~/apps/clockApp/alarm.vue')
const clockApp_stopwatch = () => import('~/apps/clockApp/stopwatch.vue')
const clockApp_timer = () => import('~/apps/clockApp/timer.vue')

// Phone App
const phoneApp = () => import('~/apps/phoneApp/phoneApp.vue')
const phoneApp_favorites = () => import('~/apps/phoneApp/favorites.vue')
const phoneApp_recents = () => import('~/apps/phoneApp/recents.vue')
const phoneApp_contacts = () => import('~/apps/phoneApp/contacts.vue')
const phoneApp_contact = () => import('~/apps/phoneApp/contact.vue')
const phoneApp_keypad = () => import('~/apps/phoneApp/keypad.vue')
const phoneApp_calling = () => import('~/apps/phoneApp/calling.vue')
const phoneApp_voicemail = () => import('~/apps/phoneApp/voicemail.vue')

// Text App
const textApp = () => import('~/apps/textApp/textApp.vue')
const textApp_conversations = () => import('~/apps/textApp/conversations.vue')
const textApp_conversation = () => import('~/apps/textApp/conversation.vue')




// Routes
const routes = [
	{
		path: "/installation/",
		name: "installationScreen",
		component: installationLayer,
		beforeEnter: (to, from, next) => {
			let appInstalled = JSON.parse(localStorage.getItem("appInstalled"))
			if(appInstalled) next({ name: 'lockScreen' })
			else next()
		},
	}, {
		component: entryLayer,
		beforeEnter: (to, from, next) => {
			let appInstalled = JSON.parse(localStorage.getItem("appInstalled"))
			if(!appInstalled) next({ name: 'installationScreen' })
			else next()
		},
		children: [
			{
				path: "/locked/",
				name: "lockScreen",
				component: unauthenticatedLayer
			},
			{
				path: "/",
				component: authenticatedLayer,
				beforeEnter: (to, from, next) => {
					let deviceUnlocked = JSON.parse(localStorage.getItem("deviceUnlocked"))
					if(!deviceUnlocked) next({ name: 'lockScreen' })
					else next()
				},
				children: [
					// Home Screen
					{
						path: "home/",
						name: "homeScreen",
						component: homeScreen
					},
					// Clock App
					{
						path: "apps/clock/",
						component: clockApp,
						children: [
							{
								path: "world-clock/",
								name: "clockApp_worldClock",
								component: clockApp_worldClock,
							}, {
								path: "alarm/",
								name: "clockApp_alarm",
								component: clockApp_alarm,
							}, {
								path: "stopwatch/",
								name: "clockApp_stopwatch",
								component: clockApp_stopwatch,
							}, {
								path: "timer/",
								name: "clockApp_timer",
								component: clockApp_timer,
							}, {
								path: "",
								redirect: { name: "clockApp_worldClock" },
							}
						]
					},
					// Phone App
					{
						path: "/apps/phone/",
						component: phoneApp,
						children: [
							{
								path: "favorites/",
								name: "phoneApp_favorites",
								component: phoneApp_favorites,
							}, {
								path: "recents/",
								name: "phoneApp_recents",
								component: phoneApp_recents,
							}, {
								path: "contacts/",
								name: "phoneApp_contacts",
								component: phoneApp_contacts,
							}, {
								path: "contacts/:id/",
								name: "phoneApp_contact",
								component: phoneApp_contact,
							}, {
								path: "keypad/",
								name: "phoneApp_keypad",
								component: phoneApp_keypad,
							}, {
								path: "calling/:number/",
								name: "phoneApp_calling",
								component: phoneApp_calling,
							}, {
								path: "voicemail/",
								name: "phoneApp_voicemail",
								component: phoneApp_voicemail,
							}, {
								path: "",
								redirect: { name: "phoneApp_keypad" },
							}
						]
					},
					// Text App
					{
						path: "/apps/text/",
						component: textApp,
						children: [
							{
								path: "conversations/",
								name: "textApp_conversations",
								component: textApp_conversations,
								meta: { title: "Messages" }
							}, {
								path: "conversations/:id/",
								name: "textApp_conversation",
								component: textApp_conversation,
								meta: { title: "Conversation" }
							}, {
								path: "",
								redirect: { name: "textApp_conversations" },
							}
						]
					}
				]
			}
		]
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: { name: "lockScreen" }
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})


// const { deviceState } = deviceControl()
// router.beforeEach(async (to, from, next) => {
// 	let installed = localStorage.getItem('installed')
// 	// let unlocked = await deviceState.unlocked
// 	// installed = false
// 	// unlocked = false
// 	if (to.name !== 'loadingScreen' && !installed) next({ name: 'loadingScreen' })
// 	// else if (to.name !== 'lockScreen' && !unlocked) next({ name: 'lockScreen' })
// 	else next()
// })

export default router
// export default createRouter({
// 	history: createWebHistory(),
// 	routes
// })