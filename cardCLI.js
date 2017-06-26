const fs = require('fs');
const inquirer = require("inquirer");
const clozeCard = require('./clozeCard.js')
const BasicCard = require('./basicCard.js');

const questions = {
    type: "rawlist",
    name: "cardType",
    message: "what kind of flashcard would you like to make?",
    choices: ["basic card", "Cloze card"]
}

function startCard() {
    inquirer.prompt(questions).then(function(answer) {
    	let fCardType = answer.cardType;
        if (answer.cardType === "Cloze card") {
            clozeFlash(fCardType)

        } else {
            basicFlash(fCardType)
        }
    });
};

// validates that user enters a response to the question
function validateInput(name) {
    if (name === " ") {
        console.log('Please enter the flashcard response')
    } else {
        return name !== '';
    }
}

// writes record of flash card entry
function writeRecord(Card, cardType) {
	fs.appendFile(cardType+'.txt', '************************\n', + 'Question: ' + card.cardFront + '\n' + 'Answer: ' + card.cardFront + '\n')
}

// cloze card prompts and action
function clozeFlash(cType) {
    inquirer.prompt([{
            type: "input",
            name: "clozeText",
            message: "Enter the full response to a flashcard question: ",
            validate: validateInput
        }, {
            type: "input",
            name: "clozeDelete",
            message: "Enter the deletion for the full response to the question entered: ",
            validate: validateInput
        }])
        .then(function(answer) {
            console.log("cloze is working ");
            console.log("answer is: ", answer.clozeText);
            console.log("the deletion: ", answer.clozeDelete);
            startCard();
        });
} // this end the clozeCard function statement

function basicFlash(cType) {
    inquirer.prompt([{
        	type: "input",
            name: "basicText",
            message: "Enter the full question for the front of the flashcard: ",
            validate: validateInput
        }, {
            type: "input",
            name: "basicAnswer",
            message: "Enter the answer for the back of the flashcard: ",
            validate: validateInput
        }])
        .then(function(answer) {
            var cardFront = answer.basicText;
            var cardBack = answer.basicAnswer;
            var newBasicCard = new BasicCard()
            BasicCard.newBasicCard(cardFront, cardBack);
            writeRecord(newCard, cType); //call the function to write the new instace of BasicCard to a .txt file
            startCard(); // starts the card generator process after current card is complete 
        });
}

startCard()
