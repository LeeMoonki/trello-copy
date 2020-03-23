// utils
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const characters = [...numbers, ...alphabet];

export const makeId = length => {
  const len = characters.length;
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters[(~~Math.random() * len)];
  }

  return result;
};