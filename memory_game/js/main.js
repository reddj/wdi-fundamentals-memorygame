// console.log("Up and running!");
//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";




var cards = [
    {
    	rank: "queen",
    	suit: "hearts",
    	cardImage: "images/queen-of-hearts.png"
    },
    {
    	rank: "queen",
    	suit: "diamonds",
    	cardImage: "images/queen-of-diamonds.png"
    },
    {
    	rank: "king",
    	suit: "hearts",
    	cardImage: "images/king-of-hearts.png"
    },
     {
    	rank: "king",
    	suit: "diamonds",
    	cardImage: "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];
var result = document.getElementById("match-or-not");	
var clickedCards = document.getElementsByClassName("clicked");

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		result.textContent = "You found a match!";
	}
	else {
		result.textContent = "Sorry, try again.";
		}
};

var flipCard = function() {
	var cardId = this.getAttribute("data-id");
	var card = cards[cardId];
    this.setAttribute("src", card.cardImage);
    this.setAttribute("class", "clicked");
    console.log(this);
    cardsInPlay.push(card.rank);
    if (cardsInPlay.length === 2) {
	        checkForMatch();
}
};   

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
          var cardElement = document.createElement("img");
          cardElement.setAttribute("src", "images/back.png");
          cardElement.setAttribute("data-id", i);
          cardElement.addEventListener("click", flipCard);
          var board = document.getElementById("game-board");
          board.appendChild(cardElement);
	}
};

createBoard();
