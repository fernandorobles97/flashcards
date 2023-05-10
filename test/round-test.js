const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');
const { sampleData } = require('../src/sample-data');
const { createRound } = require('../src/round');
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
    const turn = takeTurn('array', round);
     
    expect(round.turns).to.equal(1);
  });
});