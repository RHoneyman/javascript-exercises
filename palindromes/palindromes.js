const palindromes = function(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let stringArr = string.toLowerCase().split('');
  let newStringArr = stringArr.filter(char => alphabet.includes(char));
  let reverseStringArr = [...newStringArr];
  reverseStringArr.reverse();

  for (let i = 0; i < newStringArr.length; i++) {
    if(newStringArr[i] != reverseStringArr[i]) {
      return false;
    }
  }
  return true;
};

palindromes('ZZZZ car, a man, a maraca.');

module.exports = palindromes;
