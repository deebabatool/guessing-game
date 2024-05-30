#!/usr/bin/env node

//Let's create A Number_Guessing_Game
import inquirer from "inquirer";

const Guess_Random_Numb: number = Math.floor(Math.random()* 10 + 1);

const Number_Guessing_Game =await inquirer.prompt([

{
    name: "guess_numb",
    type: "number",
    message: "please guessed the number between 1-10 ?",
},

])

if(Number_Guessing_Game.guess_numb == Guess_Random_Numb){
    console.log("Congrats your guessed is correct");
}
else{
    console.log("Opzzz you guessed wrong!");
}
