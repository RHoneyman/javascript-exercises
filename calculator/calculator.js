function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let sum = 0;
	array.forEach(num => sum += num);
	return sum;
}

function multiply (array) {
	let product = 1;
	if (array.length == 0) {
		return 0;
	}
	array.forEach(num => product *= num);
	return product;
}

function power(a, b) {
	let result = 1;
	for (let i = 0; i < b; i++) {
		result *= a;
	}
	return result;
}

function factorial(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return (n * factorial(n-1));
	}

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}