//checks user input values for cloze

const clozeCard = require('./clozeCard.js');
const fullText = clozeCard.fullText;
const cloze = clozeCard.cloze;

const clozeCompare = function clozeCompare(fullText, cloze) {
    let textArr = fulltext.split(' ')
    for (let i = 0; i < textArr.length; i++) {
        if (cloze === textArr[i]) {
            console.log('everything matches up, lets go!');
            return true
        } else {
            // console.error('oops, something when wrong ' + cloze + 'does not appear in ' + fulltext)
            return false
        }
    }
}

module.exports = clozeCard;
