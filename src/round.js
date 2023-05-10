const { evaluateGuess } = require("./turn");

const createRound = (deck) => {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  }
};

const takeTurn = (guess, round) => {
  round.turns += 1;
  const turn = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (turn === 'correct!') {
    round.deck.shift();
    round.currentCard = round.deck[0];
    return 'correct!';
  } else {
    round.incorrectGuesses.push(round.currentCard.id);
    round.deck.shift();
    round.currentCard = round.deck[0];
    return 'incorrect!';
  }
};

module.exports = {
  createRound,
  takeTurn
}