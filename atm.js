#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("welcome to IMRAN HASSAN atm ");
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }]);
console.log(pinAnswer.pin);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
}
else {
    console.log("incorrect pin number");
}
let operationAns = await inquirer.prompt([{
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "fastcash", "check balance"]
    }]);
if (operationAns.operation === "check balance") {
    console.log(`your current balance is ${myBalance}`);
}
else if (operationAns.operator === "withdraw") {
}
let amountAns = await inquirer.prompt([{
        name: "amount",
        message: "enter your amount",
        type: "number",
    }]);
console.log(`your amount balance is ${myBalance -= amountAns.amount}`);
if (amountAns.amount > myBalance) {
    console.log(`your balance is insufficient`);
}
let fastCashAns = await inquirer.prompt([{
        name: "fastcash",
        message: "please select option",
        type: "list",
        choices: ["2000", "5000", "10000", "20000"]
    }]);
console.log(`your remaining balance is${myBalance -= fastCashAns.fastcash}`);
