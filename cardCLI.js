const inquirer = require(inquirer);

var question input = [];


const questions = {
	message: "what kind of flashcard would you like to make?",
    type: "rawlist",
    name: "cardType",
    choices: ["basic card", "Cloze card"]
}

inquirer.prompt( question ).then(function(answer) {
	if (answer) {

	} else {}

});