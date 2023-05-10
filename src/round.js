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
  return round
};

module.exports = {
  createRound,
  takeTurn
}