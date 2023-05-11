const chai = require('chai');
const expect = chai.expect;

const { sampleData } = require('../src/sample-data');
const { createCard } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(sampleData[0].id, sampleData[0].question, sampleData[0].answers, sampleData[0].correctAnswer);
    
    expect(card.id).to.equal(sampleData[0].id);
    expect(card.question).to.equal(sampleData[0].question);
    expect(card.answers).to.deep.equal(sampleData[0].answers);
    expect(card.correctAnswer).to.equal(sampleData[0].correctAnswer);
  });  
});