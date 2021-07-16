# iOS 1.0 on Vue.js (early access 🐞🐞🐞)

Playing with Vue.js.
Live version: [ios.gololobov.dev](https://ios.gololobov.dev)


## 🤷‍♂️ Why?
In Short - Nostalgy and Interest

Interest, is it possible to create OS, based on modern web technologies. Using IndexedDB as storage, Web Worker for offline work and system services, Web APIs to communicate with Hardware (Camera, GPS, Storage and so on).
P.S. This is only a prototype, not a full functional OS. This App is use Fake Auto Generated Data, and didn't have access to your contacts, messages, calls.
Also, one of the goal, is making this App super fast and light. Maybe less than 500kb 🤔 (without user data and photos).



## 📲 How To Run Locally (dev)?
1. Clone Repo
2. In vite.config.js change HMR Host to Your Machine Local Network IP
3. Run `docker-compose up`
4. Navigate to: `localhost:81`

## ⚡️ ToDo (ASAP):
- Messages Bubbles
- Back Button
- Contacts List
- OS Loading Indication
- OS Transitions
- App Icons Optimization
- ...
- more Apps!

## 🐞 Known Bugs:
- **Text App:** "Conversations Page" Lost context after "Hard Page Reload" `TypeError: can't access property "scrollTo", container is null`
- **Phone App:** Recent Calls Page
- Fix Routes `"/" => "/locked/"`
- Custom Navigation Bar colors
- Table Scrolling on mobile
- Chrome Line height
- SVG Problems on Safari 😕