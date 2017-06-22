module.exports = BasicCard

function BasicCard(front, back) {
    if (this instanceof BasicCard) { //if statement allows users to call constructor with or without the `new` keyword
        this.front = front; //front of card; holds the question
        this.back = back; // back of card; holds the answer
    } else {
    	return new BasicCard(front, back);
    }
}
