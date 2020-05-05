/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const dups = [...s].filter((str, index) => s.indexOf(str) !== index);
  const uniques = [];
  [...s].forEach((str) => {
    if (!dups.includes(str)) {
      uniques.push(str);
    }
  });
  console.log(uniques);
  return s.indexOf(uniques[0]);
};
