const fs = require('fs');
const inquirer = require("inquirer");
const ClozeCard = require('./clozeCard.js')
const BasicCard = require('./basicCard.js');

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
function writeRecord(card, cardType) {
//     fs.appendFile(cardType + '.txt', '************************\n', +'Question: ' + card.cardFront + '\n' + 'Answer: ' + card.cardback + '\n', function(err) {
//         if (err) {
//             console.log('Oh boy something bad just went down, error: ', err)
//         }
//     });
// }

}
// cloze card prompts and action
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
            var newClozeCard = new ClozeCard(text, deletion) // creates new clozeCard object
       //     clozeFlashCard.push(newClozeCard) // stores all instances of the newly created cloze card objects into the array.
console.log("new cloze card: ",newClozeCard)
console.log('partial: ', newClozeCard.clozeRemoved);
console.log('concat partial: ',newClozeCard.partial[0]+" ******* "+newClozeCard.partial[1]);

// var clozeFront = ClozeCard.fulltext
// 	var clozeFront.split(" ") {
//       		for (var i = 0; i < Things.length; i++) {
//           	console.log(fullText[i]);
//        	}
//        }
            startCard();
        });
} // this end the clozeFlash function statement

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
            var cardFront = answer.basicText;
            var cardBack = answer.basicAnswer;
            var newBasicCard = new BasicCard(cardFront, cardBack) // creates new basic card object
            basicFlashCard.push(newBasicCard); // stores all instances of the newly created basic card objects into the array basicFlashCards
            console.log('new Basic Card: ',newBasicCard)
            writeRecord(newBasicCard, cardType); //call the function to write the new instace of BasicCard to a .txt file
            console.log("new basic card: ",newBasicCard)
            startCard(); // starts the card generator process after current card is complete 
        });
}

startCard()
