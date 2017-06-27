const ClozeCard = function ClozeCard(fullText, cloze) {
    if (this instanceof ClozeCard) { //if statement allows users to call constructor with or without the `new` keyword
        this.cloze = cloze; // contains only deleted portion of text
        this.fullText = fullText; // full text, nothing missing
        let partialTextArray = fullText.split(cloze); //splits fullText into an array of strings and removes the the cloze
        this.partial = partialTextArray.join("*****");//concatenates partialTextArray and adds in '****" at the cloze deletion.

    } else {
        return new ClozeCard(fullText, Cloze);
    }

    ClozeCard.prototype.clozeRemoved = function() {
        return this.partial[0] + " ******* " + this.partial[1]
    }
}

        // ClozeCard.prototype.error = function() {


    module.exports = ClozeCard;

        // ### Bonuses

        // * Write your constructors such that users can call them with or without the `new` keyword. 
        // * Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.
