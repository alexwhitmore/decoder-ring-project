'use strict';

function substitution(input, alphabet, encode = true) {
  let str = '';
  const abc = 'abcdefghijklmnopqrstuvwxyz';

  const checkAlphabet = [];
  for (let letters in alphabet) {
    checkAlphabet.push(alphabet[letters]);
  }
  let alphabetDuplicate = checkAlphabet.some(
    (letter, arrayBank) => checkAlphabet.indexOf(letter) !== arrayBank
  );

  let allLetters = checkAlphabet.every((character) => abc.includes(character));

  if (alphabet.length !== 26 || alphabetDuplicate || !allLetters) return false;

  for (let characters in input) {
    const character = input[characters];
    const codeValue = alphabet.indexOf(character);
    const trueValue = abc.indexOf(character);

    if (alphabet.indexOf(character) === -1) {
      str += character;
      continue;
    }
    str += encode ? alphabet[trueValue] : abc[codeValue];
  }
  return str;
}

module.exports = substitution;
