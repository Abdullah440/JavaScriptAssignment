import inquirer from "inquirer"
let message = 'Hello World 222';
console.log(message);

// message not assignable with number cz type is string
// if const variable, this is also not assignable with string even

function tellMeSixty(age:number) {
	if (age >= 60) {
		console.log('You are 60!');
		
	} else { 
		console.log('remaining years to 60 is ' + (60 - age) + ' years');
	}
}
// tellMeSixty(55);

let answers = await inquirer.prompt([{
	name: "age",
	type: "number",
	message: "Enter your Age:"
}
]);
console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
