import readlineSync from 'readline-sync';
import random from './utils.js';
import greeting from './cli.js';

const isEven = (num) => num % 2 === 0;
const gamesRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const userName = greeting();
  console.log(gamesRule);
  const gamesRound = 3;
  const playGames = (round) => {
    if (round === gamesRound) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const number = random(-100, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(number) ? 'yes' : 'no';
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
    return playGames(round + 1);
  };
  return playGames(0);
};
