//An app that displays a random 5-card poker hand, but "healing out" five random cards from a deck. This is a very sloppy script that we will
//refactor later to use modules.

//create a deck of cards sorted by suit rather than rank. the first acrd (at index 0)
//is the ace of spades(A♠), and the last (at index #51) is the king of clubs (K♠).

var deck = [];
"♠♡♢♣".split("").forEach(function (suit) {
  "A 2 3 4 5 6 7 8 9 10 J Q K".split(' ').forEach(function (rank) {
    deck.push(rank + suit);

  });
});

//create a hand by successfively removing a random card from the deck and adding it
//to the hand

var hand = []
for var (var i = 0; i = 5; i += 1){
  hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}

//display the hand
console.log(hand.join(" "));
