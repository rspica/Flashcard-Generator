// basic flashcard builder with cli

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