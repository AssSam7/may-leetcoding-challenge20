/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let res = [],
    noOfJewels = 0;
  [...J].forEach((jewel) => {
    res.push([...S].filter((stone) => stone === jewel));
  });
  res.forEach((item) => {
    noOfJewels += item.length;
  });
  console.log(noOfJewels);
  return noOfJewels;
};
