const products = [
	{id: '001', name: 'cocomo', price:10, status: 'NEW'},
	{id: '002', name: 'cocomo1', price:10, status: 'OLD'},
	{id: '003', name: 'cocomo2', price:10, status: 'UPDATED'},
	{id: '004', name: 'cocomo3', price:10, status: 'NEW'},
	{id: '005', name: 'cocomo4', price:10, status: 'UPDATED'},
]

//EXPTECTED RESULT
// sort by status NEW UPDATED and OLD
let newarray = [];
// products.forEach(product => {
// 	if (product.status == 'NEW')
// 		newarray.push(product);
// });

// products.forEach(product => {
// 	if (product.status == 'UPDATED')
// 		newarray.push(product);
// });

// products.forEach(product => {
// 	if (product.status == 'OLD')
// 		newarray.push(product);
// });

// console.log(newarray);
