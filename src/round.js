const { evaluateGuess } = require('../src/turn');

function createRound(deck) {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0, 
    incorrectGuesses: []
  };
};

function takeTurn(guess, round) {
  round.turns++;
  round.currentCard = round.deck[round.turns];
  if (guess !== round.currentCard.correctAnswer) {
    round.incorrectGuesses.push(round.currentCard.id);
  };
  return evaluateGuess(guess, round.currentCard.correctAnswer);
};

function calculatePercentCorrect(round) {
  const numberCorrect = round.turns - round.incorrectGuesses.length;
  const percentageCorrect = (numberCorrect / round.turns) * 100;
  return percentageCorrect;
};

function endRound(round) {
  console.log(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`);
  return(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`);
}

module.exports = { 
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
};