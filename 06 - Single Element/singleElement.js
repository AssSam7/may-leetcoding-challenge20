/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let numsMap = {};
  // Creating a map of number of occurances
  nums.forEach((num) => {
    if (Object.keys(numsMap).includes(num.toString())) {
      numsMap[num]++;
    } else {
      numsMap[num] = 1;
    }
  });
  console.log(numsMap);

  // Traversal through the object
  for (const key in numsMap) {
    if (numsMap[key] === 1) {
      return key;
    }
  }
  return 0;
};
