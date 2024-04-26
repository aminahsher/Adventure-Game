#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100
  }
}
class opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}
let Player = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "please enter your name:",
});
let Opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "Select your opponent:",
  choices: ["Cobra", "Spider", "Bichoo"],
});
let p1 = new player(Player.name);
let o1 = new opponent(Opponent.select);

do {
  if (Opponent.select == "Cobra") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select your opponent:",
      choices: ["Attack", "Drink portion", "Run for life"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0){
        console.log(chalk.bold.red.italic("You Loose, Better Luck next time"));
        process.exit()
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0){
            console.log(chalk.bold.green.italic("You Won"));
            process.exit()
            }
      }
      
    }
    if (ask.opt == "Drink portion") {
    
    console.log(chalk.italic.bold.blueBright(`your fuel is ${p1.fuel}`))
      }
    if (ask.opt == "Run for life") {
        p1.fuelIncrease()
 console.log(chalk.bold.red.italic("You Loose, Better Luck next time"));
 process.exit()
    }
  }
// spider
  if (Opponent.select == "Spider") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select your opponent:",
      choices: ["Attack", "Drink portion", "Run for life"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0){
        console.log(chalk.bold.red.italic("You Loose, Better Luck next time"));
        process.exit()
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0){
            console.log(chalk.bold.green.italic("You Won"));
            process.exit()
            }
      }
      
    }
    if (ask.opt == "Drink portion") {
    
    console.log(chalk.italic.bold.blueBright(`your fuel is ${p1.fuel}`))
      }
    if (ask.opt == "Run for life") {
        p1.fuelIncrease()
 console.log(chalk.bold.red.italic("You Loose, Better Luck next time"));
 process.exit()
    }
  }
// bichoo
  if (Opponent.select == "Bichoo") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select your opponent:",
      choices: ["Attack", "Drink portion", "Run for life"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0){
        console.log(chalk.bold.red.italic("You Loose, Better Luck next time"));
        process.exit()
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0){
            console.log(chalk.bold.green.italic("You Won"));
            process.exit()
            }
      }
      
    }
    if (ask.opt == "Drink portion") {
    
    console.log(chalk.italic.bold.blueBright(`your fuel is ${p1.fuel}`))
      }
    if (ask.opt == "Run for life") {
 console.log(chalk.bold.red.italic("You Loose, Better Luck next time"));
 process.exit()
    }
  }
} while (true);
