/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		const current = s[i];
		const last = stack[stack.length - 1];

		if (
			(current === ")" && last === "(") ||
			(current === "}" && last === "{") ||
			(current === "]" && last === "[")
		) {
			stack.pop();
		} else {
			stack.push(current);
		}
	}

	return stack.length === 0;
};