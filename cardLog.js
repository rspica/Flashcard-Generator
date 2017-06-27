// writes record of flash card entry

const fs = require('fs');

function writeRecord(cardType, question, solution) {
    // console.log("cardfront: ", question);
    // console.log("cardback: ", solution);
    // console.log("cardType: ", cardType);
    let fileName = cardType.split(' ').join("_");
    console.log("fileName: ", fileName);

    fs.appendFile(fileName + '.txt', '\n\n************************\n' + 'Question: ' + question + '\n' + 'Answer: ' + solution + '\n', function(err) {
        if (err) {
            console.error('Oh boy something bad just went down, error: ', err)
        }
        console.log('card data logged successfully');
    });
} //closes write to txt file function
