import { createWebHistory, createRouter } from "vue-router"

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

// ––––––––––––––– Layers ––––––––––––––– //
const InstallationLayer = () => 	import('~/layers/InstallationLayer.vue')
import EntryLayer from '~/layers/EntryLayer.vue'
import UnauthenticatedLayer from '~/layers/UnauthenticatedLayer.vue'
import AuthenticatedLayer from '~/layers/AuthenticatedLayer.vue'
import NotSupportedLayer from '~/layers/NotSupportedLayer.vue'


// –––––––––––––––– Views ––––––––––––––– //
import HomeScreen from '~/views/HomeScreen.vue'
import ComingSoon from '~/apps/ComingSoon.vue'


// –––––––––––––––– Apps –––––––––––––––– //

// Clock App
import ClockAppEntry from '~/apps/ClockApp/ClockAppEntry.vue'
import ClockAppWorldClock from '~/apps/ClockApp/ClockAppWorldClock.vue'
import ClockAppAlarm from '~/apps/ClockApp/ClockAppAlarm.vue'
import ClockAppStopwatch from '~/apps/ClockApp/ClockAppStopwatch.vue'
import ClockAppTimer from '~/apps/ClockApp/ClockAppTimer.vue'

// Calculator App
import CalculatorAppEntry from '~/apps/CalculatorApp/CalculatorAppEntry.vue'

// Camera App
import CameraAppEntry from '~/apps/CameraApp/CameraAppEntry.vue'

// Photos App
import PhotosAppEntry from '~/apps/PhotosApp/PhotosAppEntry.vue'
import PhotosAppAlbums from '~/apps/PhotosApp/PhotosAppAlbums.vue'
import PhotosAppAlbum from '~/apps/PhotosApp/PhotosAppAlbum.vue'

// Phone App
import PhoneAppEntry from '~/apps/PhoneApp/PhoneAppEntry.vue'
import PhoneAppFavorites from '~/apps/PhoneApp/PhoneAppFavorites.vue'
import PhoneAppRecents from '~/apps/PhoneApp/PhoneAppRecents.vue'
import PhoneAppContacts from '~/apps/PhoneApp/PhoneAppContacts.vue'
import PhoneAppContact from '~/apps/PhoneApp/PhoneAppContact.vue'
import PhoneAppKeypad from '~/apps/PhoneApp/PhoneAppKeypad.vue'
import PhoneAppCalling from '~/apps/PhoneApp/PhoneAppCalling.vue'
import PhoneAppVoicemail from '~/apps/PhoneApp/PhoneAppVoicemail.vue'

// Text App
import TextAppEntry from '~/apps/TextApp/TextAppEntry.vue'
import TextAppConversations from '~/apps/TextApp/TextAppConversations.vue'
import TextAppConversation from '~/apps/TextApp/TextAppConversation.vue'






// ––––––––––––––– Routes ––––––––––––––– //
const routes = [
	{
		path: "/not-supported/",
		name: "NotSupportedLayer",
		component: NotSupportedLayer
	},
	{ path: '/', redirect: { name: 'LockScreen' } },
	{
		path: "/installation/",
		name: "installationScreen",
		component: InstallationLayer,
		beforeEnter: (to, from, next) => {
			let appInstalled = JSON.parse(localStorage.getItem("appInstalled"))
			if(isSafari) next({ name: 'NotSupportedLayer' })
			if(appInstalled) next({ name: 'LockScreen' })
			
			else next()
		},
	}, {
		path: "/",
		component: EntryLayer,
		namе: "EntryLayer",
		beforeEnter: (to, from, next) => {
			let appInstalled = JSON.parse(localStorage.getItem("appInstalled"))
			if(isSafari) next({ name: 'NotSupportedLayer' })
			else if(!appInstalled) next({ name: 'installationScreen' })
			else next()
		},
		children: [
			{
				path: "/locked/",
				name: "LockScreen",
				component: UnauthenticatedLayer
			},
			{
				path: "/",
				component: AuthenticatedLayer,
				beforeEnter: (to, from, next) => {
					let deviceUnlocked = JSON.parse(localStorage.getItem("deviceUnlocked"))
					if(!deviceUnlocked) next({ name: 'LockScreen' })
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
		redirect: { name: "HomeScreen" }
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router