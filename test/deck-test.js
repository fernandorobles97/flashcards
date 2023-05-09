const chai = require('chai');
const expect = chai.expect;

const { createDeck } = require('../src/deck');
const { prototypeData } = require('../src/data');

describe('deck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should create an arrray of card objects', function() {
    const card1 = prototypeData[0];
    const card2 = prototypeData[1];
    const card3 = prototypeData[2];
    const deck = createDeck([card1, card2, card3]);

    expect(deck).to.deep.equal([card1, card2, card3]);
  });
});