#!/usr/bin/env node 
import { calculator } from "./calculator";
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import path from "path";
import { OptionValues, program } from "commander";
// Clear the console when we call our cli
clear();
// Log to the console
console.log(
	// Make the console log "red" using the "chalk" library
  chalk.red(
		// Use the "figlet" library to write some cool text
    figlet.textSync('calculator-cli', { horizontalLayout: 'full' })
  )
);
program
  .version("0.0.1")
  .description("A Calculator CLI")
  .option(
    "-o, --operation <operation>",
    "Operation to perform [add, subtract, multiply, divide]"
  )
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
} else {
  const options: OptionValues = program.opts();
  const operation = options.operation;
  console.log(operation);

  const prompt = require('prompt-sync')();

  const number1 = parseInt(prompt('Enter first number'));
console.log(number1);

const number2 = parseInt(prompt('Enter second number'));
console.log(number2);

const calc: calculator = new calculator(number1, number2);

if(operation == "add") {
  calc.add();
} else if (operation == "subtract") {
  calc.subtract();
}else if (operation == "divide") {
  calc.divide();
}else if (operation == "multiply") {
  calc.multiply();
}

}








