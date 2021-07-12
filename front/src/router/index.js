import { createWebHistory, createRouter } from "vue-router"


// ––––––––––––––– Layers ––––––––––––––– //
const InstallationLayer = () => 	import('~/layers/InstallationLayer.vue')
const EntryLayer = () => 			import('~/layers/EntryLayer.vue')
const UnauthenticatedLayer = () => 	import('~/layers/UnauthenticatedLayer.vue')
const AuthenticatedLayer = () => 	import('~/layers/AuthenticatedLayer.vue')


// –––––––––––––––– Views ––––––––––––––– //
const HomeScreen = () => 			import('~/views/HomeScreen.vue')
const ComingSoon = () => 			import('~/apps/ComingSoon.vue')


// –––––––––––––––– Apps –––––––––––––––– //

// Clock App
const ClockAppEntry = () => 		import('~/apps/ClockApp/ClockAppEntry.vue')
const ClockAppWorldClock = () => 	import('~/apps/ClockApp/ClockAppWorldClock.vue')
const ClockAppAlarm = () => 		import('~/apps/ClockApp/ClockAppAlarm.vue')
const ClockAppStopwatch = () => 	import('~/apps/ClockApp/ClockAppStopwatch.vue')
const ClockAppTimer = () => 		import('~/apps/ClockApp/ClockAppTimer.vue')

// Calculator App
const CalculatorAppEntry = () => 	import('~/apps/CalculatorApp/CalculatorAppEntry.vue')

// Camera App
const CameraAppEntry = () => 		import('~/apps/CameraApp/CameraAppEntry.vue')

// Photos App
const PhotosAppEntry = () => 		import('~/apps/PhotosApp/PhotosAppEntry.vue')
const PhotosAppAlbums = () => 		import('~/apps/PhotosApp/PhotosAppAlbums.vue')
const PhotosAppAlbum = () => 		import('~/apps/PhotosApp/PhotosAppAlbum.vue')

// Phone App
const PhoneAppEntry = () => 		import('~/apps/PhoneApp/PhoneAppEntry.vue')
const PhoneAppFavorites = () => 	import('~/apps/PhoneApp/PhoneAppFavorites.vue')
const PhoneAppRecents = () => 		import('~/apps/PhoneApp/PhoneAppRecents.vue')
const PhoneAppContacts = () => 		import('~/apps/PhoneApp/PhoneAppContacts.vue')
const PhoneAppContact = () => 		import('~/apps/PhoneApp/PhoneAppContact.vue')
const PhoneAppKeypad = () => 		import('~/apps/PhoneApp/PhoneAppKeypad.vue')
const PhoneAppCalling = () => 		import('~/apps/PhoneApp/PhoneAppCalling.vue')
const PhoneAppVoicemail = () => 	import('~/apps/PhoneApp/PhoneAppVoicemail.vue')

// Text App
const TextAppEntry = () => 			import('~/apps/TextApp/TextAppEntry.vue')
const TextAppConversations = () => 	import('~/apps/TextApp/TextAppConversations.vue')
const TextAppConversation = () => 	import('~/apps/TextApp/TextAppConversation.vue')






// ––––––––––––––– Routes ––––––––––––––– //
const routes = [
	{
		path: "/installation/",
		name: "installationScreen",
		component: InstallationLayer,
		beforeEnter: (to, from, next) => {
			let appInstalled = JSON.parse(localStorage.getItem("appInstalled"))
			if(appInstalled) next({ name: 'lockScreen' })
			else next()
		},
	}, {
		component: EntryLayer,
		beforeEnter: (to, from, next) => {
			let appInstalled = JSON.parse(localStorage.getItem("appInstalled"))
			if(!appInstalled) next({ name: 'installationScreen' })
			else next()
		},
		children: [
			{
				path: "/locked/",
				name: "lockScreen",
				component: UnauthenticatedLayer
			},
			{
				path: "/",
				component: AuthenticatedLayer,
				beforeEnter: (to, from, next) => {
					let deviceUnlocked = JSON.parse(localStorage.getItem("deviceUnlocked"))
					if(!deviceUnlocked) next({ name: 'lockScreen' })
					else next()
				},
				children: [
					// Home Screen
					{
						path: "home/",
						name: "HomeScreen",
						component: HomeScreen
					},
					// Coming Soon
					{
						path: "apps/soon/",
						name: "ComingSoon",
						component: ComingSoon
					},
					// Clock App
					{
						path: "apps/clock/",
						component: ClockAppEntry,
						children: [
							{
								path: "world-clock/",
								name: "ClockAppWorldClock",
								component: ClockAppWorldClock,
							}, {
								path: "alarm/",
								name: "ClockAppAlarm",
								component: ClockAppAlarm,
							}, {
								path: "stopwatch/",
								name: "ClockAppStopwatch",
								component: ClockAppStopwatch,
							}, {
								path: "timer/",
								name: "ClockAppTimer",
								component: ClockAppTimer,
							}, {
								path: "",
								redirect: { name: "ClockAppWorldClock" },
							}
						]
					},
					// Phone App
					{
						path: "/apps/phone/",
						component: PhoneAppEntry,
						children: [
							{
								path: "favorites/",
								name: "PhoneAppFavorites",
								component: PhoneAppFavorites,
							}, {
								path: "recents/",
								name: "PhoneAppRecents",
								component: PhoneAppRecents,
							}, {
								path: "contacts/",
								name: "PhoneAppContacts",
								component: PhoneAppContacts,
							}, {
								path: "contacts/:id/",
								name: "PhoneAppContact",
								component: PhoneAppContact,
							}, {
								path: "keypad/",
								name: "PhoneAppKeypad",
								component: PhoneAppKeypad,
							}, {
								path: "calling/:number/",
								name: "PhoneAppCalling",
								component: PhoneAppCalling,
							}, {
								path: "voicemail/",
								name: "PhoneAppVoicemail",
								component: PhoneAppVoicemail,
							}, {
								path: "",
								redirect: { name: "PhoneAppKeypad" },
							}
						]
					},
					// Text App
					{
						path: "/apps/text/",
						component: TextAppEntry,
						children: [
							{
								path: "conversations/",
								name: "TextAppConversations",
								component: TextAppConversations,
							}, {
								path: "conversations/:id/",
								name: "TextAppConversation",
								component: TextAppConversation,
							}, {
								path: "",
								redirect: { name: "TextAppConversations" },
							}
						]
					},
					// Calculator App
					{
						path: "apps/calculator/",
						name: "CalculatorAppEntry",
						component: CalculatorAppEntry
					},
					// Camera App
					{
						path: "apps/camera/",
						name: "CameraAppEntry",
						component: CameraAppEntry
					},
					// Photos App
					{
						path: "apps/photos/",
						component: PhotosAppEntry,
						children: [
							{
								path: "albums/",
								name: "PhotosAppAlbums",
								component: PhotosAppAlbums,
							}, {
								path: "albums/:id/",
								name: "PhotosAppAlbum",
								component: PhotosAppAlbum,
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

export default router