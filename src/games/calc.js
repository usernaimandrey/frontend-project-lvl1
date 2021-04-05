import { cons } from '@hexlet/pairs';
import getRandomlyNum from '../utils.js';
import process from '../index.js';

const gamesRule = 'What is the result of the expression?';
const operations = ['*', '+', '-'];
const getRandomlyOperat = (coll) => coll[getRandomlyNum(0, 3)];

const game = () => {
  const operationsRnd = getRandomlyOperat(operations);
  const firstOperand = getRandomlyNum(-100, 100);
  const secondOperand = getRandomlyNum(-100, 100);
  const question = `${firstOperand} ${operationsRnd} ${secondOperand}`;
  let rightAnswer;
  switch (operationsRnd) {
    case '*':
      rightAnswer = firstOperand * secondOperand;
      break;
    case '+':
      rightAnswer = firstOperand + secondOperand;
      break;
    default:
      rightAnswer = firstOperand - secondOperand;
      break;
  }
  return cons(question, String(rightAnswer));
};

export default () => process(gamesRule, game);
