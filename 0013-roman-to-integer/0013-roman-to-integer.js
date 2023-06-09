/**
 * @param {string} s
 * @return {number}
 */

// Steps:
// Compare every letter to the one after it.
// If the letter after it is different, and the combination exists in the values array:
// Splice those two letters, take their value, and add it to the sum.

var romanToInt = function (s) {
	const values = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
		IV: 4,
		IX: 9,
		XL: 40,
		XC: 90,
		CD: 400,
		CM: 900,
	};
	let letters = s.split("");
	let sum = 0;
	for (let i = 0; i < letters.length; i++) {
		const firstLetter = letters[i];
		const secondLetter = letters[i + 1];
		const combination = firstLetter + secondLetter;
		if (values[combination]) {
			sum += values[combination];
			letters.splice(i, 1);
		} else {
			sum += values[firstLetter];
		}
	}
  return sum;
};
