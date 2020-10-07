const fibonacci = function(num) {
  let fibArray = [1,1]; 
  let second, next;
  num = Number(num);
  if (num < 0) {
    return "OOPS";
  }

  if (num == 1 || num == 2) {
    return 1;
  }

  for (let i = 2; i < num; i++) {
    // Get second number in sequence
    // get next number in sequence.
    // Add two numbers. 
    // Set array[0] to second number, and array[1] to next number
    second = fibArray[1];
    next = fibArray.reduce((total, currentValue) => total + currentValue, 0);
    fibArray[0] = second;
    fibArray[1] = next;
  }

  return fibArray[1];
}

module.exports = fibonacci
