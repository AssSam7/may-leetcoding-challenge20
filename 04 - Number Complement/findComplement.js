/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let bin = num.toString(2);
  const comp = [...bin].map((b) => {
    if (b === "0") {
      return "1";
    }
    return "0";
  });
  console.log(parseInt(comp.join(""), 2));
  return parseInt(comp.join(""), 2);
};
