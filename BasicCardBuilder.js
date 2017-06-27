// basic flashcard builder with cli

const inquirer = require("inquirer");
const cardCLI = require('./cardCLI.js');
const BasicCard = require('./basicCard.js'); //basic flashcard constructor
const cardLog = require('./cardlog.js'); //logs results to Basic_card.txt file


// stores all instances of the newly created card objects into the array, this will be put to future use to make random card generator.
const basicFlashCard = []; 


const basicFlash = function basicFlash(cardType) {
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
            let cardLog = writeRecord(cardType, cardFront, cardBack); //call the function to write the new instace of BasicCard to a .txt file
            startCard(); // starts the card generator process after current card is complete 
        });
}

module.exports = cardLog;