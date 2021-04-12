/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strN = String(n);
  const arr = [];
  for (let i = 0; i < strN.length; i += 1) {
    const item = strN.replace(strN[i], '');
    arr.push(Number(item));
  }

  return Math.max.apply(null, arr);
}

module.exports = deleteDigit;
