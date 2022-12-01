console.log('One');
const getDataFromServer = (cb) => { 
	console.log('getting data from server');
}

setTimeout(() => {
	console.log('data rec from server..');
	let data = '777';
	callback(data);
}, 1000);

const callback = (data) => {
	console.log(data);
}
getDataFromServer();