// ---- Utils ---- //

// Random Number
function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

// Random True/False
function randomFalse(chance) {
	return Math.random() > chance
}

// Random 1/0
function randomIO(chance) {
	return Math.random() > chance ? 1 : 0
}

// Random ID
function randomId() {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// Capitalize
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
    }
}

export {randomNumber, randomFalse, randomIO, randomId, capitalizeFirstLetter, shuffleArray}