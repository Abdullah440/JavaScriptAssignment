//Task-2 ----------------------------------------------------------------
let person = 'Abdullah Bhatti';
console.log('Hello ' + person + ', would you like to learn some javascript today?');

//Task-3 ----------------------------------------------------------------
let person2 = 'Muhammad ali jinnah'
let uppercase = person2.toUpperCase();
let lowercase = person2.toLowerCase();

let str_to_array = person2.split(' ');

	let titlecase = str_to_array.map(word =>
		word[0].toUpperCase() + word.substr(1).toLowerCase()
	).join(' ');

console.log(uppercase+ '|' + '|' +lowercase +'|'+ titlecase);

//Task-4 ----------------------------------------------------------------

console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new."`);

//Task-5 ----------------------------------------------------------------
let famous_person = 'Albert Einstein';
let message = 'A person who never made a mistake never tried anything new.';
console.log(`${famous_person} once said, "${message}"`);

//Task-6 ----------------------------------------------------------------
let lineManager = 'FAIZA AZIZ KHAN'; 
let groupList = lineManager +' \n\t Abdullah Bhatti \n\t Ahmed Raza \n\t Bilal Ahmed \n\t and 10 others';
console.log(groupList);

//Task-7 & 8 ----------------------------------------------------------------

console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);

//Task-9 ----------------------------------------------------------------
let favoriteNumber = 7;
console.log(`My Favorite Number is ${favoriteNumber}`);

//Task-10 ----------------------------------------------------------------
// There is already comments in this file for understanding tasks with task numbers.

//Task-11 ----------------------------------------------------------------

let names = ['Ali Raza', 'Bilal Ahmed', 'Farhan', 'Maaz Ahmed', 'Saad Yaseen'];
names.forEach(name => { 
	console.log(name);
});

//Task-12 ----------------------------------------------------------------
names.forEach(name => { 
	console.log(name + ', Welcome to the Metaverse')
});

//Task-13 ----------------------------------------------------------------
let transportaionMode = 'Honda Civic';
console.log('I would like to own a ' + transportaionMode);

//Task-14 ----------------------------------------------------------------
let namelist = ['Arqam', 'Haziq'];
	namelist.forEach(name => {
		console.log(name + ', You are invited to dinner')
	});

	console.log(namelist[4] + ', You are invited to dinner')

//Task-15 ----------------------------------------------------------------
// now i have to invite remaining people.
namelist2 = ['Aseel', 'Bilal'];
console.log(namelist[0] + ', You are invited to dinner')
console.log(namelist[1] + ', You are invited to dinner')

//Task-16(a) ----------------------------------------------------------------
console.log(namelist[0] + ' ,I have found a bigger dinner table');
console.log(namelist[1] + ' ,I have found a bigger dinner table');
console.log(namelist[2] + ' ,I have found a bigger dinner table');
console.log(namelist2[0] + ' ,I have found a bigger dinner table');
console.log(namelist2[1] + ' ,I have found a bigger dinner table');


//Task-16(b) ----------------------------------------------------------------
// Add one new guest to the beginning of your array.
namelist.unshift('Ali Raza');
//Add one new guest to the middle of your array
namelist.push('Qadeer');
// append method not exist with array

//Task-16(c) ----------------------------------------------------------------
namelist.forEach(guest => {
	console.log(`Hi, ${guest}. Welcome to our dinner party`)
});
//Task-17 ----------------------------------------------------------------
console.log(`${namelist[2]} and ${namelist[3]}, only you are invited to dinner`);

//Task-17(b) ----------------------------------------------------------------
console.log(namelist);
totalguest = namelist.length;

	namelist.forEach((guest, index, namelist) => {
		if (totalguest > 3) {
			console.log(`${namelist[index]}, You still invited`);
		} else {
			console.log(`${namelist[index]} Sorry I can't invite you`);
			namelist.pop();
			console.log(totalguest, index);
		}
		console.log(namelist);
		totalguest--;
	});

	//Two invited guests are in list 
	console.log(namelist);
// now remove these two element
	namelist.pop();
	namelist.pop();
	
	console.log(namelist);

//Task-18 ----------------------------------------------------------------

let locations = ['SAUDI ARBIA', 'USA', 'DUBAI', 'TURKEY', 'INDIA'];
console.log(locations);								// Original
console.log([...locations].sort());					// Print your array in alphabetical order without modifying the actual list.

console.log(locations);								// Original
console.log([...locations].sort().reverse());		// Print your array in reverse alphabetical order without changing the order of the original list.

console.log(locations);								// Original
console.log([...locations].reverse());				// Reverse

console.log(locations);								// Original
console.log(locations.sort());						// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(locations.reverse());						// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//Task-19 ----------------------------------------------------------------
console.log(namelist);
// This is empty cz in last Exercise guest array was an empty.

//Task-20 ----------------------------------------------------------------
let mountains = ['Hindu Kush', 'Hindu Raj', 'Karakoram', 'K2', 'Nanga Parbat', 'Safed Koh', 'Kirthar'];
let rivers = ['Indus', 'Jehlum', 'Panjnad', 'Chenab', 'Kabul', 'Sultej', 'Dasht'];

mountains.forEach(mountain => { 
	console.log(`${mountain} for (let index = 0; index < array.length; index++) {
	const element = array[index];
	mountain
} in Pakistan`);
})

rivers.forEach(river => { 
	console.log(`${river} river in Pakistan`);
})
//Task-21 ----------------------------------------------------------------

let house = {
	size: '1000sqd',
	rooms: 5,
	parking: true,
	gardern: false,
	CCTV: 7
}
console.log(house);
x