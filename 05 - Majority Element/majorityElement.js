/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let numsMap = {},
    major = 0;

  // Creating a map of number of occurances
  nums.forEach((num) => {
    if (Object.keys(numsMap).includes(num.toString())) {
      numsMap[num]++;
    } else {
      numsMap[num] = 1;
    }
  });

  // Identifying majority element i.e. majorly occuring number
  Object.keys(numsMap).forEach((num) => {
    if (numsMap[num] >= Math.round(nums.length / 2)) {
      major = num;
    }
  });
  console.log(major);
  return major;
};
