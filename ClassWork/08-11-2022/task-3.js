const AaluPrathaPromise = new Promise((resolvedCallback, rejectCallback) => {
	const mood = 2;
	setTimeout(() => {

	if (mood > 5) {
		resolvedCallback('Please, Eat Aalu Pratha');

	} else {
		rejectCallback('Too tired');
		}
	}, 1000);

});

AaluPrathaPromise
	.then((response) => {
	console.log(response);
	})
	.catch((error) => {
	console.log(error);
	})
