import { cons } from '@hexlet/pairs';
import getRandomlyNum from '../utils.js';
import process from '../index.js';

const gamesRule = 'Find the greatest common divisor of given numbers.';

const gcd = (numOne, numTwo) => {
  const divider = numOne > numTwo ? numTwo : numOne;
  const dividend = numOne > numTwo ? numOne : numTwo;
  const iter = (counter, acc) => {
    if (acc % counter === 0) {
      return counter;
    }
    return iter(acc % counter, counter);
  };
  return iter(divider, dividend);
};

const game = () => {
  const firstNum = getRandomlyNum(1, 100);
  const secondNum = getRandomlyNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = String(gcd(firstNum, secondNum));
  return cons(question, rightAnswer);
};

export default () => process(gamesRule, game);
