#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(
  chalk.yellow.bgWhite.italic(
    " \t Welcome to the Project of Rehan Khan --- Vowel's Counter"
  )
);
let askUser: any = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: chalk.green.bgYellow.italic(
      " Enter the sentence to count the number of vowels present in it:"
    ),
  },
]);
let i = 0;
for (let char of askUser.sentence) {
  if (
    char === "a" ||
    char === "A" ||
    char === "e" ||
    char === "E" ||
    char === "i" ||
    char === "I" ||
    char === "o" ||
    char === "O" ||
    char === "u" ||
    char === "U"
  ) {
    i++;
  }
}
console.log(
  chalk.blue.bgWhite.italic(
    `The number of vowels present in the given sentence are ${i}.`
  )
);
