#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgWhite(chalk.bgWhite("\n              "), chalk.bgBlue.bold("C"), chalk.bgBlueBright.bold("U"), chalk.bgYellow.bold("R"), chalk.bgGreenBright.bold("R"), chalk.bgMagenta.bold("E"), chalk.bgGray.bold("N"), chalk.bgYellow.bold("C"), chalk.bgRedBright.bold("Y"), "      ", chalk.bgBlue.bold("C"), chalk.bgBlueBright.bold("O"), chalk.bgYellow.bold("N"), chalk.bgGreenBright.bold("V"), chalk.bgMagenta.bold("E"), chalk.bgGray.bold("R"), chalk.bgYellow.bold("T"), chalk.bgRedBright.bold("E"), chalk.bgMagentaBright.bold("R"), chalk.bgWhite("              ")));
console.log(chalk.bgBlue.bold("\nUnited States Dollar (USD)"), chalk.bgBlueBright.bold("Euro (EUR)"), chalk.bgYellow.bold("British Pound Sterling (GBP)"));
console.log(chalk.bgGreenBright.bold("\nCanadian Dollar (CAD)"), chalk.bgMagenta.bold("Australian Dollar (AUD)"), chalk.bgGray.bold("New Zealand Dollar (NZD)"));
console.log(chalk.bgYellow.bold("\nUnited Arab Emirates Dirham (AED)"), chalk.bgRedBright.bold("Saudi Riyal (SAR)"), chalk.bgMagentaBright.bold("Chinese Yuan (CNY)"));
console.log(chalk.bgRed.bold("\nTurkish Lira (TRY)"), chalk.bgCyan.bold("Indian Rupee (INR)"), chalk.bgGreen.bold("Pakistani Rupee (PKR)"));
console.log("\n");
let condition = true;
const currency = {
    USD: 1, // Base Currency 1 USD = 1 USD     United States Dollar
    EUR: 0.92, // 1 USD = 0.92 EUR          Euro 
    GBP: 0.76, // 1 USD = 0.76 GBP          British Pound Sterling
    CAD: 1.25, // 1 USD = 1.25 CAD          Canadian Dollar 
    AUD: 1.32, // 1 USD = 1.32 AUD          Australian Dollar 
    NZD: 1.44, // 1 USD = 1.44 NZD          New Zealand Dollar 
    AED: 3.67, // 1 USD = 3.76 AED          United Arab Emirates Dirham 
    SAR: 3.75, // 1 USD = 3.74 SAR          Saudi Riyal 
    CNY: 6.40, // 1 USD = 6.40 CNY          Chinese Yuan 
    TRY: 13.5, // 1 USD = 13.5 TRY          Turkish Lira 
    INR: 75.50, // 1 USD = 75.50 INR         Indian Rupee
    PKR: 277.54 // 1 USD = 277.54 PKR        Pakistani Rupee
};
while (condition) {
    let userAnswer = await inquirer.prompt([
        {
            name: "from",
            message: chalk.black.bgYellowBright.underline.bold("\nEnter From Currency:"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "AED", "SAR", "CNY", "TRY", "INR", "PKR"]
        },
        {
            name: "to",
            message: chalk.black.bgYellowBright.underline.bold("\nEnter To Currency:"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "AED", "SAR", "CNY", "TRY", "INR", "PKR"]
        },
        {
            name: "amount",
            message: chalk.black.bgCyanBright.underline.bold("\nEnter Your Amount:"),
            type: "number"
        }
    ]);
    // storing the currency of a "from" input in a variable
    let fromAmount = currency[userAnswer.from]; // Dynamic Approach
    // take the "currency" of a "userAnswer.from" and store in "fromAmount"
    // storing the currency of a "to" input in a variable
    let toAmount = currency[userAnswer.to];
    // take the "currency" of a "userAnswer.to" and store in "toAmount"
    // storing the amount of a user input in a variable
    let amount = userAnswer.amount;
    // take the "amount" from "userAnswer" and store in "amount"
    // converting the amount in a USD because USD is our "Base Currency" 
    let baseAmount = amount / fromAmount;
    // As we know our "Base Currency" is "USD" so here we converting the amount in USD
    // converting in desired currency by just multiplying the "calculated USD (baseAmount)" with desired currency
    let convertAmount = baseAmount * toAmount;
    console.log("\n");
    console.log(chalk.bgGray.underline.bold(`${userAnswer.amount} ${userAnswer.from} to ${userAnswer.to} is: ${parseFloat(convertAmount.toFixed(2))}`));
    let wantMore = await inquirer.prompt([
        {
            name: "more",
            message: chalk.bgRedBright.bold("\nAre you want more Currency Conversion?"),
            type: "confirm",
            default: "faslse"
        }
    ]);
    condition = wantMore.more;
} // loop end here
console.log(chalk.bgRed.bold("\nExit"));
