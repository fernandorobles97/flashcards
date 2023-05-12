const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/turn');
const { sampleData } = require('../src/sample-data');

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return if guess is correct or incorrect', function() {
    const card = createCard(sampleData[0].id, sampleData[0].question, sampleData[0].answers, sampleData[0].correctAnswer);
    const correctGuess = evaluateGuess('object', card.correctAnswer);
    const incorrectGuess = evaluateGuess('array', card.correctAnswer);
    
    expect(correctGuess).to.equal('correct!');
    expect(incorrectGuess).to.equal('incorrect!');
  });  
});