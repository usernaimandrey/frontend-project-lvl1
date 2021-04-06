import { cons } from '@hexlet/pairs';
import getRandomlyNum from '../utils.js';
import process from '../index.js';

const gamesRule = 'What number is missing in the progression?';

const progression = () => {
  const firstElement = getRandomlyNum(1, 100);
  const countOfElements = getRandomlyNum(5, 11);
  const stepOfProgression = getRandomlyNum(1, 10);
  const indexOfHiddenElement = getRandomlyNum(0, countOfElements - 1);
  const hiddenElement = firstElement + stepOfProgression * indexOfHiddenElement;
  const iter = (counter, acc, element) => {
    if (counter >= countOfElements) {
      return [acc.trim(), String(hiddenElement)];
    }
    if (counter === indexOfHiddenElement) {
      return iter(counter + 1, `${acc} ..`, element + stepOfProgression);
    }
    return iter(counter + 1, `${acc} ${element}`, element + stepOfProgression);
  };
  return iter(0, '', firstElement);
};

const game = () => {
  const [question, rightAnswer] = progression();
  return cons(question, rightAnswer);
};

export default () => process(gamesRule, game);
