const sortObjects = (data, key) => {
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

const sortObjectsByInt = (data, key) => {
	try {
		data.sort((a, b) => {
			let fa = a[key],
				fb = b[key]
			if (fa > fb) {
				return -1;
			}
			if (fa < fb) {
				return 1;
			}
			return 0;
		})
		return data
	} catch(error) {
		console.log(error)
	}
}

export { sortObjects, sortObjectsByInt }