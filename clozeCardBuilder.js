// Cloze flashcard builder with cli


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