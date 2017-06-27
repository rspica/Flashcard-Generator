const BasicCard = function BasicCard(front, back) {
    if (this instanceof BasicCard) { //conditional allows users to call constructor with or without the `new` keyword
        this.front = front; //front of card; holds the question
        this.back = back; // back of card; holds the answer
    } else {
        return new BasicCard(front, back); // returns BasicCard with the new keyword to bind the instance of this to the function and not the global space
    }
}


module.exports = BasicCard;


// ### Bonuses

// * Write your constructors such that users can call them with or without the `new` keyword. 
// * Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.


// BasicCard.prototype.newCard = function newCard(front, back) {
//     console.log("basic card input record; front of card: ", front, +" back of card: " + back);
// }