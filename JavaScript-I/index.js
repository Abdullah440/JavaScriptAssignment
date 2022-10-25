//Question-2 ----------------------------------------------------------------
let person = 'Abdullah Bhatti';
// console.log('Hello ' + person + ', would you like to learn some javascript today?');

//Question-3 ----------------------------------------------------------------
let person2 = 'Muhammad ali jinnah'
let uppercase = person2.toUpperCase();
let lowercase = person2.toLowerCase();

let str_to_array = person2.split(' ');

	let titlecase = str_to_array.map(word =>
		word[0].toUpperCase() + word.substr(1).toLowerCase()
	).join(' ');

// console.log(uppercase+ '|' + '|' +lowercase +'|'+ titlecase);

//Question-4 ----------------------------------------------------------------

console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new."`);

//Question-5 ----------------------------------------------------------------
let famous_person = 'Albert Einstein';
let message = 'A person who never made a mistake never tried anything new.';
// console.log(`${famous_person} once said, "${message}"`);

//Question-6 ----------------------------------------------------------------


