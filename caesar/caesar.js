//shift each letter of the phrase by number of spots indicated
//by the shiftFactor. Capitals must stay capitals, lower case stay
//lowercase. Large shifts should 

const caesar = function(phrase, shiftFactor) {
  //ascii for A - Z is 65 - 90
  //ascii for a - z is 97 - 122
  let phraseArr = phrase.split('');

  //if shiftFactor is greater than 26, get remainder when dividing by 26
  if (shiftFactor > 26) {
    shiftFactor = shiftFactor % 26;
  }

  for (let i = 0; i < phraseArr.length; i++) {
    let charCode = phraseArr[i].charCodeAt(0);
    if(charCode >= 65 && charCode <= 90) {
      charCode += shiftFactor;
      if (charCode > 90) {
        charCode = (charCode - 90) + 64;
      }
      if (charCode < 65) {
        charCode = 90 - (64 - charCode);
      }
    } else if (charCode >= 97 && charCode <= 122) {
      charCode += shiftFactor;
      if (charCode > 122) {
        charCode = (charCode - 122) + 96;
      }
      if (charCode < 97) {
        charCode = 122 - (96 - charCode);
      }
    }
    phraseArr[i] = String.fromCharCode(charCode);
  }

  return phraseArr.join('');
}

module.exports = caesar
