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
				const dateOptions = {weekday: false, month: 'long', day: 'numeric'}
				let now = Date.now()
				let d = new Date(value)
				let diff = now - value
				let time
				if(diff < 86400000) {time = d.toLocaleTimeString('en-US', timeOptions)}
				else {time = d.toLocaleDateString('en-US')}
				
				return time
			} catch(error) {
				console.log(error)
			}
		}

		app.config.globalProperties.$sortObjects = (data, key) => {
			try {
				data.sort((a, b) => {
					let fa = a[key].toLowerCase(),
						fb = b[key].toLowerCase()
				
					if (fa < fb) {
						return -1;
					}
					if (fa > fb) {
						return 1;
					}
					return 0;
				})
				return data
			} catch(error) {
				console.log(error)
			}
		}
		app.provide('phoneNumber', 'unixTime', 'sortObjects')
	}
}



