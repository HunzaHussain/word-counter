#! /usr/bin/env node
import inquirer from "inquirer";

const answers:{
      Sentance:string
}= await inquirer.prompt(
    [{
        name:"Sentance",
        type:"input",
        message:"Enter your Sentance to count the word:"
    }

    ])
    const words = answers.Sentance.trim().split(" ")
    console.log(words);
    console.log(`your sentance word count word is ${words.length}`);

    