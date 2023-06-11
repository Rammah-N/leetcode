/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let prefix = "";

	let sorted = strs.sort();
	let first = sorted[0];
	let last = sorted[sorted.length - 1];
	let end = false;

	while (first.length > 0) {
		if (last[0] === first[0]) {
			prefix += first[0];
		} else {
			break;
		}
		first = first.substring(1);
		last = last.substring(1);
	}

	return prefix;
};
