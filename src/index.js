import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import greeting from './games/cli.js';

const process = (gamesRule, game) => {
  const userName = greeting();
  console.log(gamesRule);
  const gamesRound = 3;
  const playGames = (round) => {
    if (round === gamesRound) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const gameData = game();
    const question = car(gameData);
    const rightAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
    return playGames(round + 1);
  };
  return playGames(0);
};

export default process;
