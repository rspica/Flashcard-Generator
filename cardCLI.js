const fs = require('fs');
const inquirer = require("inquirer");
const ClozeCard = require('./clozeCard.js');
const BasicCard = require('./basicCard.js');
const inputCheck = require('./inputCheck.js')
const cardLog = require('./cardLog.js');

// stores all instances of the newly created card objects into the array, this will be put to future use to make random card generator.
const basicFlashCard = []; 
const clozeFlashCard = [];

const questions = {
    type: "rawlist",
    name: "cardType",
    message: "what kind of flashcard would you like to make?",
    choices: ["Basic card", "Cloze card"]
}

function startCard() {
    inquirer.prompt(questions).then(function(answer) {
        let fCardType = answer.cardType;
        if (fCardType === "Cloze card") {
            clozeFlash(fCardType)

        } else {
            basicFlash(fCardType)
        }
    });
};

// validates that user enters a response to the question
function validateInput(name) {
    if (name === "" || name === " ") {
        console.log('Please enter the flashcard response')
    } else {
        return name !== '';
    }
}

// writes record of flash card entry
function writeRecord(cardType, question, solution) {
    console.log("cardfront: ", question);
    console.log("cardback: ", solution);
    console.log("cardType: ", cardType);
    let fileName = cardType.split(' ').join("_");
    console.log("fileName: ", fileName);

    fs.appendFile(fileName + '.txt', '\n\n************************\n' + 'Question: ' + question + '\n' + 'Answer: ' + solution + '\n', function(err) {
        if (err) {
            console.error('Oh boy something bad just went down, error: ', err)
        }
        console.log('card data logged successfully');
    });
} //closes write to txt file function

// cloze flashcard prompts and action
function clozeFlash(cardType) {
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
            let text = answer.clozeText;
            let deletion = answer.clozeDelete
            if (inputCheck) {
            var newClozeCard = new ClozeCard(text, deletion); // creates new clozeCard object
            clozeFlashCard.push(newClozeCard); // stores all instances of the newly created card object
            let question = newClozeCard.partial;
            console.log("User input full text: ", newClozeCard.fullText);
            console.log("User input cloze: ", newClozeCard.cloze);
            console.log("Cloze card with deletion: ", newClozeCard.partial);
            writeRecord(cardType, question, text); //call the function to write the new instace of BasicCard to a .txt file
            } else {
            	console.error('oops, something when wrong ' + cloze + 'does not appear in ' + fulltext)
            }
           
            startCard();
        });
} // this end the clozeFlash function statement

// Basic flashcard prompts and action
function basicFlash(cardType) {
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
            let cardFront = answer.basicText;
            let cardBack = answer.basicAnswer;
            let newBasicCard = new BasicCard(cardFront, cardBack) // creates new basic card object
            basicFlashCard.push(newBasicCard); /// stores all instances of the newly created card object
            console.log('new Basic Card: ', newBasicCard)
            let writeRecord = cardLog(cardType, cardFront, cardBack); //call the function to write the new instace of BasicCard to a .txt file
            startCard(); // starts the card generator process after current card is complete 
        });
}

startCard()

