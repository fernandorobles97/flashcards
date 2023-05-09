const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');
const { prototypeData } = require('../src/data');

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return if guess is correct or incorrect', function() {
    const card = prototypeData[0];
    const correctGuess = evaluateGuess('object', card.correctAnswer);
    const incorrectGuess = evaluateGuess('array', card.correctAnswer);
    
    expect(correctGuess).to.equal('correct!');
    expect(incorrectGuess).to.equal('incorrect!');
  });  
});