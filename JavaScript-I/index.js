//Task-2 ----------------------------------------------------------------
let person = 'Abdullah Bhatti';
// console.log('Hello ' + person + ', would you like to learn some javascript today?');

//Task-3 ----------------------------------------------------------------
let person2 = 'Muhammad ali jinnah'
let uppercase = person2.toUpperCase();
let lowercase = person2.toLowerCase();

let str_to_array = person2.split(' ');

	let titlecase = str_to_array.map(word =>
		word[0].toUpperCase() + word.substr(1).toLowerCase()
	).join(' ');

// console.log(uppercase+ '|' + '|' +lowercase +'|'+ titlecase);

//Task-4 ----------------------------------------------------------------

// console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new."`);

//Task-5 ----------------------------------------------------------------
let famous_person = 'Albert Einstein';
let message = 'A person who never made a mistake never tried anything new.';
// console.log(`${famous_person} once said, "${message}"`);

//Task-6 ----------------------------------------------------------------
let lineManager = 'FAIZA AZIZ KHAN'; 
let groupList = lineManager +' \n\t Abdullah Bhatti \n\t Ahmed Raza \n\t Bilal Ahmed \n\t and 10 others';
// console.log(groupList);

//Task-7 & 8 ----------------------------------------------------------------

// console.log(4 + 4);
// console.log(10 - 2);
// console.log(2 * 4);
// console.log(16 / 2);

//Task-9 ----------------------------------------------------------------
let favoriteNumber = 7;
// console.log(`My Favorite Number is ${favoriteNumber}`);

//Task-10 ----------------------------------------------------------------
// There is already comments in this file for understanding tasks with task numbers.

//Task-11 ----------------------------------------------------------------

let names = ['Ali Raza', 'Bilal Ahmed', 'Farhan', 'Maaz Ahmed', 'Saad Yaseen'];
// names.forEach(name => console.log(name));

//Task-12 ----------------------------------------------------------------
names.forEach(name => console.log(name + ', Welcome to the Metaverse'));

//Task-13 ----------------------------------------------------------------
let transportaionMode = 'Honda Civic';
console.log('I would like to own a ' + transportaionMode);

//Task-14 ----------------------------------------------------------------
let namelist = ['Arqam', 'Haziq', 'Hamza'];
	namelist.forEach(name => console.log(name + ', You are invited to dinner'));

	// console.log(namelist[4] + ', You are invited to dinner')

//Task-15 ----------------------------------------------------------------
// now i have to invite remaining people.
namelist2 = ['Aseel', 'Bilal'];
// console.log(namelist[0] + ', You are invited to dinner')
// console.log(namelist[1] + ', You are invited to dinner')




