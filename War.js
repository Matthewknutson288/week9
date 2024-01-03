class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        for (let rank = 1; rank <= 13; rank++) {
            for (let suit of ['Hearts', 'Diamonds', 'Clubs', 'Spades']) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }

    playCard() {
        return this.hand.pop();
    }
}

// Create deck and players
let deck = new Deck();
deck.shuffle();
let player1 = new Player("Player 1");
let player2 = new Player("Player 2");

// Deal cards
for (let i = 0; i < 26; i++) {
    player1.hand.push(deck.deal());
    player2.hand.push(deck.deal());
}

// Play game
for (let i = 0; i < 26; i++) {
    let card1 = player1.playCard();
    let card2 = player2.playCard();
    if (card1.rank > card2.rank) {
        player1.score++;
    } else if (card1.rank < card2.rank) {
        player2.score++;
    }
}

// Display score and winner
console.log(`Player 1 Score: ${player1.score}`);
console.log(`Player 2 Score: ${player2.score}`);
if (player1.score > player2.score) {
    console.log("Player 1 is the winner!");
} else if (player1.score < player2.score) {
    console.log("Player 2 is the winner!");
} else {
    console.log("It's a tie!");
}