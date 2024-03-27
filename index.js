#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: "please guess the number between 1 to 6 =",
        type: "number",
        name: "user guessed number",
    }
]);
if (answer.userguessednumber === randomnumber) {
    console.log("congratulation! you guessed correct number.");
}
else {
    console.log("sorry! you guessed wrong number.");
}
