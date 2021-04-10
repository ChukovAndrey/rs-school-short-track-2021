/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj1 = s1.split('').reduce((acc, item) => {
    acc[item] = acc.hasOwnProperty.call(acc, item) ? acc[item] + 1 : 1;
    return acc;
  }, {});

  const obj2 = s2.split('').reduce((acc, item) => {
    acc[item] = acc.hasOwnProperty.call(acc, item) ? acc[item] + 1 : 1;
    return acc;
  }, {});

  const result = Object.entries(obj1).reduce((res, [key, value]) => {
    if (obj2.hasOwnProperty.call(obj2, key)) {
      const min = Math.min(value, obj2[key]);
      return res + min;
    }
    return res;
  }, 0);

  return result;
}

module.exports = getCommonCharacterCount;
