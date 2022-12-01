let exp = 'name=ali;age=49;prof=dev;color=red';
let object = {};
string_to_array = exp.split(';');
// console.log(string_to_array);
string_to_array.forEach(element => {
	properties = element.split('=');
	if (properties[0] != 'color') {	
		object[properties[0]] = properties[1];	
	}
});

console.log(object);