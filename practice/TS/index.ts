// import str  from './src/constant.js';
// console.log(num);
// console.log(str);
import inquirer from 'inquirer';
let num1 = await inquirer.prompt([{
	type: "number",
	name: "num1",
	message: "Enter First Number"
}])

let num2 = await inquirer.prompt([{
	type: "number",
	name: "num2",
	message: "Enter Second Number"
}]);

let operator = await inquirer.prompt([{
	type: "string",
	name: "operation",
	message: "ENTER OPERATOR"
}])


switch (operator.operation) {
	case "+":
		console.log(`${num1.num1} ${operator.operation} ${num2.num2} = `+ (num1.num1 + num2.num2) );
		break;
	case "-":
		console.log(`${num1.num1} ${operator.operation} ${num2.num2} = `+ (num1.num1 - num2.num2) );
		break;
	case "*":
		console.log(`${num1.num1} ${operator.operation} ${num2.num2} = `+ (num1.num1 * num2.num2) );
		break;
	case "/":
		console.log(`${num1.num1} ${operator.operation} ${num2.num2} = `+ (num1.num1 / num2.num2) );
		break;

	default:
		console.log('Error Occured');
		break;
}