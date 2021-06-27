import { createWebHistory, createRouter } from "vue-router"

// Views
const lockScreen = () => import('~/views/lockScreen.vue')
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
const phoneApp_keypad = () => import('~/apps/phoneApp/keypad.vue')
const phoneApp_voicemail = () => import('~/apps/phoneApp/voicemail.vue')

// Text App
const textApp = () => import('~/apps/textApp/textApp.vue')
const textApp_conversations = () => import('~/apps/textApp/conversations.vue')
const textApp_conversation = () => import('~/apps/textApp/conversation.vue')



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
	},
	// Clock App
	{
		path: "/apps/clock",
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
	},
	// Phone App
	{
		path: "/apps/phone",
		component: phoneApp,
		children: [
			{
				path: "favorites",
				name: "phoneApp_favorites",
				component: phoneApp_favorites,
				meta: {title: "Favorites"}
			}, {
				path: "recents",
				name: "phoneApp_recents",
				component: phoneApp_recents,
				meta: {title: "Recents"}
			}, {
				path: "contacts",
				name: "phoneApp_contacts",
				component: phoneApp_contacts,
				meta: {title: "Contacts"}
			}, {
				path: "keypad",
				name: "phoneApp_keypad",
				component: phoneApp_keypad,
				meta: {title: "Keypad"}
			}, {
				path: "voicemail",
				name: "phoneApp_voicemail",
				component: phoneApp_voicemail,
				meta: {title: "Voicemail"}
			}, {
				path: "",
				redirect: { name: "phoneApp_keypad" },
			}
		]
	},
	
	// Text App
	{
		path: "/apps/text",
		component: textApp,
		children: [
			{
				path: "conversations",
				name: "textApp_conversations",
				component: textApp_conversations,
				meta: {title: "Messages"}
			}, {
				path: "conversations/:id",
				name: "textApp_conversation",
				component: textApp_conversation,
				meta: {title: "Conversation"}
			}, {
				path: "",
				redirect: { name: "textApp_conversations" },
			}
		]
	}, {
		path: "/:pathMatch(.*)*",
		redirect: { name: "Home Screen" },
	}
]
export default createRouter({
	history: createWebHistory(),
	routes
})