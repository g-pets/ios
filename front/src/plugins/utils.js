export default {
	install: (app) => {
		// Phone Number Formatter
		app.config.globalProperties.$phoneNumber = (value) => {
			try {
				if (!value) return value
				const phoneNumber = value.replace(/[^\d]/g, "")
				const phoneNumberLength = phoneNumber.length
				if (phoneNumberLength < 4) return phoneNumber
				if (phoneNumberLength < 7) {
					return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
				}
				return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`
			} catch(error) {
				console.log(error)
			}
		}

		app.config.globalProperties.$unixTime = (value) => {
			try {
				const timeOptions = {hour12: false, hour: '2-digit', minute:'2-digit'}
				let d = new Date(value)
				let time = d.toLocaleTimeString('en-US', timeOptions)
				return time
			} catch(error) {
				console.log(error)
			}
		}
		app.provide('phoneNumber', 'unixTime')
	}
}