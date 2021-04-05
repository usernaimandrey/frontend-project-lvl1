import { cons } from '@hexlet/pairs';
import random from '../utils.js';
import process from '../index.js';

const isEven = (num) => num % 2 === 0;
const gamesRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const question = random(-100, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => process(gamesRule, game);
