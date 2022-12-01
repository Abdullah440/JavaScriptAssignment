import inquirer from 'inquirer';
let userInput = await inquirer.prompt([{
        type: "string",
        name: "value",
        message: "Guess Number"
    }]);
let game = Math.round(Math.random() * 10);
console.log(`Value is ${game}`);
function checkValue(userValue) {
    console.log(userValue == game ? 'Right' : 'Game Over');
}
checkValue(userInput.value);
