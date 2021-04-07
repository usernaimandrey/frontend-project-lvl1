import { cons } from '@hexlet/pairs';
import getRandomlyNum from '../utils.js';
import process from '../index.js';

const gamesRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num, divider = 2) => {
  if (num === divider) {
    return true;
  }
  if (num % divider === 0) {
    return false;
  }
  return isPrime(num, divider + 1);
};

const game = () => {
  const question = getRandomlyNum(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(String(question), rightAnswer);
};

export default () => process(gamesRule, game);
