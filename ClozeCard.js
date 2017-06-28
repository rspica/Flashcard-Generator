// constructor for new cloze flash card objects

// const inputCheck = require('./inputCheck.js')

const ClozeCard = function(fullText, cloze) {
    if (this instanceof ClozeCard) { //if statement allows users to call constructor with or without the `new` keyword
        this.cloze = cloze; // contains only deleted portion of text
        this.fullText = fullText; // full text, nothing missing
        let partialTextArray = fullText.split(cloze); //splits fullText into an array of strings and removes the the cloze
        this.partial = partialTextArray.join("*****"); //concatenates partialTextArray and adds in '****" at the cloze deletion.

    } else {
        return new ClozeCard(fullText, cloze);
    }
}


ClozeCard.prototype.partial = function() {
	let partialTextArray = fullText.split(cloze);
	partial = partialTextArray.join("*****");
}


ClozeCard.prototype.error = function(fullText, cloze) {
    let textArr = fulltext.split(' ')
    for (let i = 0; i < textArr.length; i++) {
        if (cloze === textArr[i]) {
            console.log('everything matches up, lets go!');
            return true
        } else {
            console.error('oops, something when wrong ' + cloze + 'does not appear in ' + fulltext)
            return false
        }
    }
}


module.exports = ClozeCard;
// module.exports = inputCheck;
// ### Bonuses

// * Write your constructors such that users can call them with or without the `new` keyword. 
// * Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.
