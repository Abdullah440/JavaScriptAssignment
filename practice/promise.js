const p1 = Promise.resolve('Hello');
const p2 = 10;
const p3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 200, 'Promise End');
});
users = fetch('https://jsonplaceholder.typicode.com/users')
	.then(users => users.json());
// console.log(users);
Promise.all([p1, p2, p3, users]).then(values => console.log(values));
