const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');
const { sampleData } = require('../src/sample-data');
const { createRound, calculatePercentCorrect } = require('../src/round');
const { takeTurn } = require('../src/round');

describe('round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = createCard(sampleData[0].id, sampleData[0].question, sampleData[0].answers, sampleData[0].correctAnswer);
    card2 = createCard(sampleData[1].id, sampleData[1].question, sampleData[1].answers, sampleData[1].correctAnswer);
    card3 = createCard(sampleData[2].id, sampleData[2].question, sampleData[2].answers, sampleData[2].correctAnswer);
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });

  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should have deck property that holds onto deck object', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should have currentCard property that starts with first card in deck', function() {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should have turns property that starts at 0', function() {
    expect(round.turns).to.equal(0);
  });

  it('should have incorrectGuesses property that starts as empty array', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it('should update the turns count', function() {
    const incorrectGuess = takeTurn('array', round);
     
    expect(round.turns).to.equal(1);
  });

  it('should update currentCard property to be the next card', function() {
    const incorrectGuess = takeTurn('array', round);

    expect(round.currentCard).to.equal(round.deck[0])
  });

  it('should evaluate if guess is correct or not and return feedback', function() {
    const incorrectGuess = takeTurn('array', round);
    const correctGuess = takeTurn('array', round);

    expect(incorrectGuess).to.equal('incorrect!')
    expect(correctGuess).to.equal('correct!')
  });

  it('should store incorrect guesses, via specific card\'s ID, in incorrectGuesses array', function() {
    const incorrectGuess = takeTurn('array', round);
    const incorrectGuess2 = takeTurn('object', round);
    const correctGuess = takeTurn('mutator method', round);
 
    expect(round.incorrectGuesses[0]).to.equal(1) 
    expect(round.incorrectGuesses[1]).to.equal(2) 
    expect(round.incorrectGuesses.length).to.equal(2)
  });

  it('should be a function', function() {
    expect(calculatePercentCorrect).to.be.a('function');
  });

  it('should calculate and return percentage of correct guesses', function() {
    const incorrectGuess = takeTurn('array', round);
    const incorrectGuess2 = takeTurn('object', round);
    const correctGuess = takeTurn('mutator method', round);
    const percentage = calculatePercentCorrect(round);

    expect(percentage).to.equal(33)
  });
});