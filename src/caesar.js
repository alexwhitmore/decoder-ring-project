'use strict';

function caesar(input, shift, encode = true) {
  // Wrap the amount

  // Make an output variable
  let output = '';

  if (shift === 0) return false;
  if (shift > 25 || shift < -25 || !shift) return false;

  // Go through each character
  for (let i = 0; i < input.length; i++) {
    // Get the character we'll be appending
    let letter = input[i];

    // If it's a letter...
    if (letter.match(/[a-z]/i)) {
      // Get its code
      let code = input.charCodeAt(i);

      // Lowercase letters
      if (code >= 97 && code <= 122) {
        letter = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    // Append
    output += letter.toLowerCase();
  }

  // All done!
  return output;
}
module.exports = caesar;
