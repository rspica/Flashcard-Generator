module.exports =  ClozeCard;

function ClozeCard(text, cloze) {
	if (this instanceof ClozeCard) { //if statement allows users to call constructor with or without the `new` keyword
		this.cloze = cloze; // contains only deleted portion of text
		this.partial = partial; //contains remaining portion after cloze deletion
		this.fullText = fullText; // full text, nothing missing
	} else {
		return new ClozeCard(text, Cloze);
	}
}

ClozeCard.prototype.error = function() {
	
}